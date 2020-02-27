import React from "react";
import renderer from "react-test-renderer";
import Mistakes from "./mistakes";

test(`Correctly render Mistake with one zero count`, () => {
  const tree = renderer.create(
      <Mistakes
        count={0}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

test(`Correctly render Mistake with one one count`, () => {
  const tree = renderer.create(
      <Mistakes
        count={1}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
