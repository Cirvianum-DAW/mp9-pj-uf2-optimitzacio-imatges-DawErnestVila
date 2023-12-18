import imagemin from "imagemin";
import imageminWebp from "imagemin-webp";

await imagemin(["src/img/original/*.{jpeg,jpg}"], {
  destination: "src/img/build/",
  plugins: [imageminWebp({ quality: 50 })],
});

console.log("Images optimized");
