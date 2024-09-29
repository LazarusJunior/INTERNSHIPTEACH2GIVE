//Exercise 2: Default Function Parameters


import { expect } from "chai";
import { it } from "node:test";

const concatName = (first: string, last: string = "Pocock") => {
    return `${first} ${last}`;
  };

  it("should return the full name", () => {
    const result = concatName("John", "Doe");
    expect(result).equal("John Doe");
  });
  
  it("should return the first name with default last name", () => {
    const result = concatName("John");
    expect(result).equal("John Pocock");
  });