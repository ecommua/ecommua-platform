// CJS shim for @next/env — satisfies Payload's loadEnv.js require() call
// loadEnvConfig is a no-op because we load env via dotenv before getPayload()
module.exports = {
  loadEnvConfig: function() { return { loadedEnvFiles: [] } },
}
