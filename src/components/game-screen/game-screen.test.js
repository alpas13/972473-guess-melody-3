import React from "react";
import renderer from "react-test-renderer";
import {Router} from "react-router-dom";
import {GameScreen} from "./game-screen";
import GameType from "../../const";
import history from "../../history";

const noop = () => {};
const children = <div className="children-component" />;

describe(`GameScreen component render correctly`, () => {
  test(`Correctly render GameScreen component with type - genre`, () => {
    const tree = renderer.create(
        <Router
          history={history}
        >
          <GameScreen
            type={GameType.GENRE}
            mistakes={3}
            goToWelcome={noop}
          >
            {children}
          </GameScreen>
        </Router>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test(`Correctly render GameScreen component with type - artist`, () => {
    const tree = renderer.create(
        <Router
          history={history}
        >
          <GameScreen
            type={GameType.ARTIST}
            mistakes={3}
            goToWelcome={noop}
          >
            {children}
          </GameScreen>
        </Router>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
