import React from "react";
import GenreQuestionScreen from "./genre-question-screen";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({adapter: new Adapter()});

const mock = {
  question: {
    type: `genre`,
    genre: `rock`,
    answers: [
      {
        src: `path`,
        genre: `rock`,
      },
      {
        src: `path`,
        genre: `jazz`,
      },
      {
        src: `path`,
        genre: `jazz`,
      },
      {
        src: `path`,
        genre: `blues`,
      },
    ],
  },
};

test(`When user answers genre question form is not sent`, () => {
  const onAnswer = jest.fn();
  const {question} = mock;

  const wrapper = shallow(<GenreQuestionScreen
    onAnswer={onAnswer}
    question={question}
    renderPlayer={() => {}}
  />);

  const genreQuestion = wrapper.find(`form`);
  const formSubmitPrevent = jest.fn();
  genreQuestion.simulate(`submit`, {
    preventDefault: formSubmitPrevent,
  });

  expect(onAnswer).toHaveBeenCalledTimes(1);
  expect(formSubmitPrevent).toHaveBeenCalledTimes(1);
});

test(`User answer passed to callback is consistent with "userAnswer" prop`, () => {
  const onAnswer = jest.fn((...args) => [...args]);
  const {question} = mock;
  const userAnswer = [false, true, false, false];

  const wrapper = shallow(<GenreQuestionScreen
    onAnswer={onAnswer}
    question={question}
    renderPlayer={() => {}}
  />);

  const genreQuestion = wrapper.find(`form`);
  const inputTwo = wrapper.find(`input`).at(1);

  inputTwo.simulate(`change`, {target: {checked: true}});
  genreQuestion.simulate(`submit`, {preventDefault() {}});

  expect(onAnswer).toHaveBeenCalledTimes(1);

  expect(onAnswer.mock.calls[0][0]).toMatchObject(question);
  expect(onAnswer.mock.calls[0][1]).toMatchObject(userAnswer);

  expect(wrapper.find(`input`).map((it) => it.prop(`checked`))).toEqual(userAnswer);
});
