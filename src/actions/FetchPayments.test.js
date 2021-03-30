import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as actions from "./FetchPayments";
import fetchMock from "fetch-mock";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("payment actions", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it("creates PAYMENT_REQUEST_STARTED and PAYMENT_REQUEST_SUCCESS when fetching payments", async () => {
    fetchMock.get("/payments", [
      { amount: 10, date: "2017-04-05" },
      { amount: 12, date: "2017-12-05" },
    ]);

    const expectedActions = [
      { type: actions.PAYMENT_REQUEST_STARTED },
      {
        type: actions.PAYMENT_REQUEST_SUCCESS,
        payments: [
          { amount: 10, date: "2017-04-05" },
          { amount: 12, date: "2017-12-05" },
        ],
      },
    ];
    const store = mockStore({ payments: {} });
    await store.dispatch(actions.fetchPayments());
    expect(store.getActions()).toEqual(expectedActions);
  });
});
