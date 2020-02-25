import {reducer, ActionType, ActionCreator} from "./reducer";

test(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    mistakes: 0,
    step: -1
  });
});

test(`Reducer should increment current step by a given value`, () => {
  expect(reducer({
    mistakes: 0,
    step: -1
  }, {
    type: ActionType.INCREMENT_STEP,
    payload: 1
  })).toEqual({
    mistakes: 0,
    step: 0
  });

  expect(reducer({
    mistakes: 0,
    step: -1
  }, {
    type: ActionType.INCREMENT_STEP,
    payload: 0
  })).toEqual({
    mistakes: 0,
    step: -1
  });
});

test(`Reducer should increment number of mistakes by a given value`, () => {
  expect(reducer({
    mistakes: 0,
    step: -1
  }, {
    type: ActionType.INCREMENT_MISTAKES,
    payload: 1
  })).toEqual({
    mistakes: 1,
    step: -1
  });

  expect(reducer({
    mistakes: 0,
    step: -1
  }, {
    type: ActionType.INCREMENT_MISTAKES,
    payload: 0
  })).toEqual({
    mistakes: 0,
    step: -1
  });
});

describe(`ActionCreator work correctly`, () => {
  test(`ActionCreator for incrementing step returns correct action`, () => {
    expect(ActionCreator.incrementStep()).toEqual({
      type: ActionType.INCREMENT_STEP,
      payload: 1,
    });
  });
});
