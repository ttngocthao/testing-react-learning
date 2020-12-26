import { getLetterMatchCount } from "./";

describe("getLetterMatchCount", () => {
  const secretWord = "travel";
  test("returns correct count if there is no letter matched", () => {
    const letterMatchCounts = getLetterMatchCount("sunny", secretWord);
    expect(letterMatchCounts).toBe(0);
  });

  test("return some counts if there are 3 matching letters", () => {
    const letterMatchCounts = getLetterMatchCount("teach", secretWord);
    expect(letterMatchCounts).toBe(3);
  });

  test("return correct count if there is some duplicate letters in guessed word", () => {
    const letterMatchCounts = getLetterMatchCount("array", secretWord); //dont count a letter twice
    expect(letterMatchCounts).toBe(2);
  });
});
