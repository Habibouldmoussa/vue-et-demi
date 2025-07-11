import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";

export default {
  input: "src/index.ts",
  output: {
    dir: "dist/admin/cjs",
    format: "cjs",
  },
  external: ["vue-demi"],
  plugins: [
    resolve(),
    typescript({
      declaration: false,
      outDir: "dist/admin/cjs",
      target: "es2015",
    }),
  ],
};
