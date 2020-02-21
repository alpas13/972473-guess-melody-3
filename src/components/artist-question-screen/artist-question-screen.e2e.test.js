import React from "react";
import ArtistQuestionScreen from "./artist-question-screen";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({adapter: new Adapter()});

const mock = {
  question: {
    type: `artist`,
    song: {
      artist: ``,
      src: ``,
    },
    answers: [{
      picture: `pic-one`,
      artist: `one`,
    }, {
      picture: `pic-two`,
      artist: `two`,
    }, {
      picture: `pic-three`,
      artist: `three`,
    }],
  }
};

const mockEvent = {
  preventDefault() {}
};

test(`Click on user answer should pass to the callback data-object from which this answer was created`, () => {
  const {question} = mock;
  const onAnswer = jest.fn();
  const userAnswer = {
    picture: `pic-one`,
    artist: `one`,
  };
  const wrapper = shallow(<ArtistQuestionScreen
    onAnswer={onAnswer}
    question={question}
    renderPlayer={() => {}}
  />);

  const answerInput = wrapper.find(`.artist__input`);
  const answerOne = answerInput.at(0);

  answerOne.simulate(`change`, mockEvent);

  expect(onAnswer).toHaveBeenCalledTimes(1);
  expect(onAnswer.mock.calls[0][0]).toMatchObject(question);
  expect(onAnswer.mock.calls[0][1]).toMatchObject(userAnswer);
});
