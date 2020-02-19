import React from "react";
import renderer from "react-test-renderer";
import GameScreen from "./game-screen";
import GameType from "../../const";

const children = <div className="children-component" />;

test(`Correctly render GameScreen component with type - genre`, () => {
  const tree = renderer.create(
      <GameScreen type={GameType.GENRE}>
        {children}
      </GameScreen>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test(`Correctly render GameScreen component with type - artist`, () => {
  const tree = renderer.create(
      <GameScreen type={GameType.ARTIST}>
        {children}
      </GameScreen>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
