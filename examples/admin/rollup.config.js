import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";

export default {
  input: "src/index.ts",
  output: {
    dir: "dist/admin",
    format: "cjs",
  },
  external: ["vue-demi"],
  plugins: [
    resolve(),
    typescript({
      declaration: true,
      declarationDir: "dist/admin",
      outDir: "dist/admin",
    }),
  ],
};
