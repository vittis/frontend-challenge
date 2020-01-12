// Required to use non-code assets with TypeScript
// Reference: https://webpack.js.org/guides/typescript/#importing-other-assets

declare module '*.svg' {
  const content: string;
  export default content;
}
