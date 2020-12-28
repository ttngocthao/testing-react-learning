import moxios from "moxios";
import { getSecretWord } from "./hookActions";

describe("moxios tests", () => {
  beforeEach(() => {
    moxios.install(); //moxios receive all our axios requests instead of http
  });
  afterEach(() => {
    moxios.uninstall();
  });
  test("callback function of getSecretWord is called with axios response", async () => {
    const secretWord = "party"; //define secret word

    //handle any axios call if accurent
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: secretWord,
      });
    });

    //create mock for callback func arg
    const mockSetSecretWord = jest.fn();

    //call getSecreatword
    await getSecretWord(mockSetSecretWord);
    //see if getSecretWord run with correct argument
    expect(mockSetSecretWord).toHaveBeenCalledWith(secretWord);
  });
});
