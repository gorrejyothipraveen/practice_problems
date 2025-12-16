import { assertEquals } from "@std/assert";
import { resolvePath } from "../src/path_normalization.js";

Deno.test("simple test", () => {
  const path = '/../'
  assertEquals(resolvePath(path), '/');
});
    