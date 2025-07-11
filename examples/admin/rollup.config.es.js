import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";

export default {
  input: "src/index.ts",
  output: {
    dir: "dist/admin/es",
    format: "es",
  },
  external: ["vue-demi"],
  plugins: [
    resolve(),
    typescript({
      declaration: true,
      declarationDir: "dist/admin/es",
      outDir: "dist/admin/es",
      target: "ESNext",
    }),
  ],
};
