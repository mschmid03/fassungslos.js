import * as esbuild from "esbuild";
import { sassPlugin } from "esbuild-sass-plugin";
import postcss from "postcss";
import autoprefixer from "autoprefixer";

const context = await esbuild.context({
  entryPoints: ["index.ts", "index.scss"],
  bundle: true,
  minify: false,
  sourcemap: true,
  outdir: "dist",
  plugins: [
    sassPlugin({
      async transform(source) {
        const { css } = await postcss([autoprefixer]).process(source);
        return css;
      },
    }),
  ],
});

// Enable watch mode
await context.watch();

// // Enable serve mode
// await context.serve();
//
// // Dispose of the context
// await context.dispose();
