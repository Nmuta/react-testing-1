import reducer, { FAKE_TYPE } from "./testereducer";
import deepFreeze from "deep-freeze";

describe("testreducer", () => {
  it("should handle FAKE_TYPE", () => {
    const currentState = { things: [{ name: "acme" }] };
    deepFreeze(currentState);
    expect(
      reducer(currentState, {
        type: FAKE_TYPE,
        thing: { name: "widget" },
      })
    ).toEqual({
      things: [{ name: "acme" }, { name: "widget" }],
    });
  });
});
