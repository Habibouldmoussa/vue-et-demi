import typescript from "@rollup/plugin-typescript";
import auto from "@rollup/plugin-auto-install";
import resolve from "@rollup/plugin-node-resolve";

export default {
  input: "src/index.ts",
  output: {
    dir: "dist/admin",
    format: "cjs",
  },
  plugins: [
    auto(),
    resolve(),
    typescript({
      declaration: true,
      declarationDir: "dist/admin/types",
      outDir: "dist/admin/types",
    }),
  ],
};
