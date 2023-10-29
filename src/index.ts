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

	Object.keys(object).forEach((key) => (object[key] = "string"));

	const stringified = JSON.stringify(object, null, 6);

	return stringified.replace("{", "").replace("}", "");
}

const program = new Command();

program
	.version("1.0.0")
	.description("Generate TypeScript types from .env files")
	.option("-p, --path <path>", "Specify the path to the .env file (default: ./env)")
	.option("-t, --types <types>", "Specify the path to save the types (default: ./src/@types/environment.d.ts)")
	.parse(process.argv);

const options = program.opts();
const path = options.path || "./.env";
const typesPath = options.types || "./src/@types/environment.d.ts";

// Criar diretórios se não existirem
mkdirp.sync(typesPath.substring(0, typesPath.lastIndexOf("/")));

if (fs.existsSync(path)) {
	const fileContent = parseDotEnv(path);

	fs.writeFileSync(typesPath, dtsFile.replace("[PARSED_ENV]", fileContent));

	console.log(chalk.green(`Types generated ${chalk.white("@")} ${chalk.blue(typesPath)}`));
} else {
	console.log(chalk.red(".env file not found!"));
}
