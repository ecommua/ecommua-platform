// Stub declaration for sharp — @types/sharp 0.32 is deprecated
// sharp types are bundled with the package in newer versions
declare module 'sharp' {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const sharp: any
  export default sharp
}
