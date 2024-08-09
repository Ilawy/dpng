import { PNGImage } from "./mod.ts";

Deno.test("test 1", (t) => {
  const png = new PNGImage(128, 128);
  png.drawRect(
    0,
    0,
    128,
    128,
    png.createRGBColor({ r: 255, g: 255, b: 255, a: 1 })
  );
  png.drawFilledCircle(
    40,
    40,
    20,
    png.createRGBColor({ r: 200, g: 168, b: 0, a: 1 })
  );
  const buf = png.getBuffer();

  Deno.writeFileSync("circle.png", buf);
});
