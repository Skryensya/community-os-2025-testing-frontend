// importa la función calculateDiscount usando ESM Modules
import { describe, it, expect } from "vitest";
import { calculateDiscount } from "../src/calculateDiscount.js";

describe("Pruebas de calculateDiscount", () => {
  it("20 dayDiff => 30", () => {
    const daysDiff = 20;
    const result = calculateDiscount(daysDiff);
    const expectedResult = 30;
    expect(result).toBe(expectedResult);
  });
  it("8 dayDiff => 15", () => {
    const daysDiff = 8;
    const result = calculateDiscount(daysDiff);
    const expectedResult = 15;
    expect(result).toBe(expectedResult);
  });
  it("1 dayDiff => 0", () => {
    const daysDiff = 1;
    const result = calculateDiscount(daysDiff);
    const expectedResult = 0;
    expect(result).toBe(expectedResult);
  });
  it("-1 dayDiff => -1", () => {
    const daysDiff = -1;
    const result = calculateDiscount(daysDiff);
    const expectedResult = -1;
    expect(result).toBe(expectedResult);
  });
});
