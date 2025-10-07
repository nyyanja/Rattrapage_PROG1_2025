import { findOdd } from "../code/exo2.js";
import { describe, it } from "mocha";
import { expect } from "chai";

describe("findOdd", () => {
    it("should return the number appears only in the array", () => {
        const result = findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]);
        expect(result).toBe(4);
    }