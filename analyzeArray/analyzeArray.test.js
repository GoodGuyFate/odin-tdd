import { analyzeArray } from "./analyzeArray";

test("returns an object", () => {
  const result = analyzeArray([1, 8, 3, 4, 2, 6]);
  expect(result).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("works with a single element array", () => {
  expect(analyzeArray([5])).toEqual({
    average: 5,
    min: 5,
    max: 5,
    length: 1,
  });
});

test("works with negative numbers", () => {
  expect(analyzeArray([-1, -5, -2])).toEqual({
    average: -2.6666666666666665,
    min: -5,
    max: -1,
    length: 3,
  });
});

test("returns null for an empty array", () => {
  expect(analyzeArray([])).toBeNull();
});
