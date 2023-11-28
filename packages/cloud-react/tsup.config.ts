import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["lib/index.tsx"],
  splitting: false,
  sourcemap: false,
  clean: true,
  dts: true,
  format: ["cjs", "esm"],
  treeshake: true,
});
