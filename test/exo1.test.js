import { expect } from "chai";
import { capitalizeNames } from "../code/exo1.js";
import { describe , it} from "mocha";

describe("capitalizeNames", () => {
it("should capitalize ['jo', 'nelson', 'jurie']", () => {
const input = ["jo", "nelson", "jurie"];
const expected = ["Jo", "Nelson", "Jurie"];
expect(capitalizeNames(input)).to.deep.equal(expected);
});

it("should capitalize ['KARLY', 'DANIEL', 'KELSEY']", () => {
const input = ["KARLY", "DANIEL", "KELSEY"];
const expected = ["Karly", "Daniel", "Kelsey"];
expect(capitalizeNames(input)).to.deep.equal(expected);
});

});