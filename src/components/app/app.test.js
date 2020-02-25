import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {App} from "./app.jsx";

const mockStore = configureStore([]);

const mocks = [
  {
    type: `genre`,
    genre: `rock`,
    answers: [{
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `rock`,
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `blues`,
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `jazz`,
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `rock`,
    }],
  }, {
    type: `artist`,
    song: {
      artist: `Jim Beam`,
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    },
    answers: [{
      picture: `https://api.adorable.io/avatars/128`,
      artist: `John Jameson`,
    }, {
      picture: `https://api.adorable.io/avatars/128`,
      artist: `Jack Daniels`,
    }, {
      picture: `https://api.adorable.io/avatars/128`,
      artist: `Jim Beam`,
    }],
  }
];

describe(`Render App`, () => {
  test(`Render WelcomeScreen`, () => {
    const store = mockStore({
      mistakes: 0,
    });

    const tree = renderer
        .create(
            <Provider store={store}>
              <App
                errorsCount={3}
                questions={mocks}
                onWelcomeButtonClick={()=>{}}
                onUserAnswer={()=>{}}
                step={-1}/>
            </Provider>
            , {
              createNodeMock: () => {
                return {};
              }
            })
        .toJSON();

    expect(tree).toMatchSnapshot();
  });

  test(`Render GenreQuestionScreen`, () => {
    const store = mockStore({
      mistakes: 3,
    });

    const tree = renderer
        .create(
            <Provider store={store}>
              <App
                errorsCount={3}
                questions={mocks}
                onWelcomeButtonClick={()=>{}}
                onUserAnswer={()=>{}}
                step={0}/>
            </Provider>
            , {
              createNodeMock: () => {
                return {};
              }
            })
        .toJSON();

    expect(tree).toMatchSnapshot();
  });

  test(`Render ArtistQuestionScreen`, () => {
    const store = mockStore({
      mistakes: 3,
    });

    const tree = renderer
          .create(
              <Provider store={store}>
                <App
                  errorsCount={3}
                  questions={mocks}
                  onWelcomeButtonClick={()=>{}}
                  onUserAnswer={()=>{}}
                  step={1}/>
              </Provider>
              , {
                createNodeMock: () => {
                  return {};
                }
              })
        .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
