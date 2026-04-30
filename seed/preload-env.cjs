/**
 * Preload script for blog-demo seed.
 * Patches Module._resolveFilename so that when Payload's bundled loadEnv.js
 * does require('@next/env'), it gets our shim that has a `.default` property
 * (matching what esbuild CJS interop expects: import_env.default.loadEnvConfig).
 */

const Module = require('module')
const path = require('path')

const originalResolve = Module._resolveFilename.bind(Module)
const shimPath = path.resolve(__dirname, 'next-env-shim.cjs')

Module._resolveFilename = function (request, parent, isMain, options) {
  if (request === '@next/env') {
    return shimPath
  }
  return originalResolve(request, parent, isMain, options)
}
