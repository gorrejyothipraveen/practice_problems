import { assertEquals } from "@std/assert";
import { pathNormalizer, resolvePath } from "../src/path_normalization.js";

Deno.test("simple test", () => {
  const path = '/../'
  assertEquals(resolvePath(path), '/');
});

Deno.test("/a = /a", () => {
  const path = '/a'
  assertEquals(pathNormalizer(path), 'a');
});

Deno.test("/a/b/c = /a/b/c", () => {
  const path = '/a/b/c'
  assertEquals(pathNormalizer(path), 'a/b/c');
});

Deno.test("/a/../c = /c", () => {
  const path = '/a/../c'
  assertEquals(pathNormalizer(path), 'c');
});

Deno.test("/../../../c = /c", () => {
  const path = '/../../../c'
  assertEquals(pathNormalizer(path), 'c');
});

Deno.test("simple test", () => {
  const path = '/../../..'
  assertEquals(resolvePath(path), '/');
});

Deno.test("Parent directory logic: /x/y/.. -> /x", () => {
  const path = '/x/y/..'
  assertEquals(resolvePath(path), '/x');
});

Deno.test("Complex mix: /a/./b/../../c/ -> /c", () => {
  const path = '/a/./b/../../c/'
  assertEquals(resolvePath(path), '/c');
});