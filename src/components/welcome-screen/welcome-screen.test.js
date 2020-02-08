import React from "react";
import renderer from "react-test-renderer";
import WelcomeScreen from "./welcome-screen";

it(`Render WelcomeScreen`, () => {
  const tree = renderer
      .create(
          <WelcomeScreen errorsCount={3}
          />)
.toJSON();
  expect(tree).toMatchSnapshot();
});
