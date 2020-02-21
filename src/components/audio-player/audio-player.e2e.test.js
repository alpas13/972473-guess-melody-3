import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import AudioPlayer from "./audio-player.jsx";

configure({adapter: new Adapter()});

const mock = {
  song: {
    src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`
  }
};

const state = {
  isLoading: false,
  isPlaying: true,
};

test(`By click on button it should change from play to pause and back`, () => {
  const onPlayButtonClick = jest.fn();
  const {song} = mock;
  const {isLoading, isPlaying} = state;

  const wrapper = mount(
      <AudioPlayer
        src={song.src}
        isPlaying={isPlaying}
        disabled={isLoading}
        onPlayButtonClick={onPlayButtonClick}
      />);
  const buttonElement = wrapper.find(`.track__button`);
  buttonElement.simulate(`click`);
  buttonElement.simulate(`click`);
  // eslint-disable-next-line no-console
  console.log(buttonElement.debug());
  expect(onPlayButtonClick).toHaveBeenCalled();
});
