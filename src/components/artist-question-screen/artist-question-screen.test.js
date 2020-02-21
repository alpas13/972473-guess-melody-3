import React from 'react';
import ArtistQuestionScreen from "./artist-question-screen";
import renderer from 'react-test-renderer';

const question = {
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
};

test(`Render ArtistQuestionScreen correctly`, () => {
  const tree = renderer
      .create(<ArtistQuestionScreen
        question={question}
        onAnswer={() => {}}
        renderPlayer={() => {}}
      />).toJSON();
  expect(tree).toMatchSnapshot();
});
