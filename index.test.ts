import { expect, test } from "bun:test";
import { wordCount } from ".";

test("wordCount", () => {
  expect(wordCount("Hello world!")).toBe(2);
});
