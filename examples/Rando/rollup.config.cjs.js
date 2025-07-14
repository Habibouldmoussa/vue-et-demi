import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";

export default {
  input: "src/index.ts",
  output: {
    dir: "dist/cjs/Rando",
    format: "cjs",
  },
  external: ["vue-demi"],
  plugins: [
    resolve(),
    typescript({
      declaration: true,
      declarationDir: "dist/cjs/Rando",
      outDir: "dist/cjs/Rando",
      target: "es2015",
    }),
  ],
};
