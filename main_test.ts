import { assertEquals } from "@std/assert";
import { add, sub } from "./main.ts";

Deno.test("Addition Test", function addTest() {
  assertEquals(add(2, 3), 5);
  assertEquals(add(3, 3), 6);
});

Deno.test("Subtraction Test", function subTest() {
  assertEquals(sub(2, 3), -1);
  assertEquals(sub(3, 3), 0);
});
