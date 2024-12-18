#!/usr/bin/env node

import chalk from "chalk";
import { Command } from "commander";
import fs from "fs";
import dotenv from "dotenv";
import dtsFile from "./dts-file";
import * as mkdirp from "mkdirp";

console.log(chalk.green("Auto Type Env!"));

function parseDotEnv(path: string): string {
	const object = dotenv.parse(fs.readFileSync(path));
	const keys = Object.keys(object).sort();
	keys.forEach((key) => (object[key] = "string"));

	const parsedKeys = keys.join("\n");
	console.log(chalk.white(`\nParsed keys: \n${parsedKeys}\n`));

	const stringified = JSON.stringify(object, null, 6);
	return stringified.replace("{", "").replace("}", "");
}

const program = new Command();

program
	.version("1.1.1")
	.description("Generate TypeScript types from .env files")
	.option("-p, --path <path>", "Specify the path to the .env file (default: ./env)")
	.option("-t, --types <types>", "Specify the path to save the types (default: ./src/environment.d.ts)")
	.parse(process.argv);

const options = program.opts();
const path = options.path || "./.env";
const typesPath = options.types
	? options?.types?.includes(".d.ts")
		? options.types
		: options.types + "/environment.d.ts"
	: "./src/environment.d.ts";

if (!typesPath.endsWith(".d.ts")) {
	console.log(chalk.red("Types file must have a .d.ts extension!"));
} else {
	const parentTypesDir = typesPath.substring(0, typesPath.lastIndexOf("/"));

	if (!fs.existsSync(parentTypesDir)) mkdirp.sync(parentTypesDir);
	if (!fs.existsSync(path)) console.log(chalk.red(".env file not found!"));
	else {
		const fileContent = parseDotEnv(path).replaceAll('"', "");
		fs.writeFileSync(typesPath, dtsFile.replace("[PARSED_ENV]", fileContent));
		console.log(chalk.green(`Types generated ${chalk.white("@")} ${chalk.blue(typesPath)}`));
	}
}
