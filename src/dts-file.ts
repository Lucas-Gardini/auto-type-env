export default `
export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {[PARSED_ENV]	}
  }
}

`;
