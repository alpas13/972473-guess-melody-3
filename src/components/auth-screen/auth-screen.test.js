import React from "react";
import renderer from "react-test-renderer";
import AuthScreen from "./auth-screen.jsx";

const noop = () => {};

test(`Correctly render AuthScreen component`, () => {
  const tree = renderer.create(
      <AuthScreen
        onSubmit={noop}
        onReplayButtonClick={noop}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
