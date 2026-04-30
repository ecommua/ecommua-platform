/**
 * Shim for @next/env — satisfies Payload's esbuild-compiled loadEnv.js.
 * Payload bundles: const { loadEnvConfig } = import_env.default
 * so the resolved module must have .default.loadEnvConfig.
 * Env vars are already loaded via dotenv in blog-demo.ts before getPayload().
 */

const shim = {
  loadEnvConfig: function () { return { loadedEnvFiles: [] } },
  initialEnv: {},
  updateInitialEnv: function () {},
  processEnv: process.env,
  resetEnv: function () {},
}

// CJS default export pattern for esbuild interop
module.exports = shim
module.exports.default = shim
