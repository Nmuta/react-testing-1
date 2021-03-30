export const FAKE_TYPE = "FAKE_TYPE";

export default function reducer(state = { things: [] }, action) {
  switch (action.type) {
    case FAKE_TYPE:
      return {
        ...state,
        things: [...state.things, action.thing],
      };
    default:
      return state;
  }
}
