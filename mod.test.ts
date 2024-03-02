import { expect, test } from "bun:test";
import { wordCount } from "./mod";

test("wordCount", () => {
  expect(wordCount("Hello world!")).toBe(2);
});
