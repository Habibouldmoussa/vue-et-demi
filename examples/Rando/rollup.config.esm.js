import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";

export default {
  input: "src/index.ts",
  output: {
    dir: "dist/esm/Rando",
    format: "es",
  },
  external: ["vue-demi"],
  plugins: [
    resolve(),
    typescript({
      declaration: true,
      declarationDir: "dist/esm/Rando",
      outDir: "dist/esm/Rando",
      target: "ESNext",
    }),
  ],
};
