import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import AudioPlayer from "./audio-player.jsx";

configure({adapter: new Adapter()});

test(`By click on button it should change from play to pause and back`, () => {
  const handlePlayButtonClick = jest.fn();

  const wrapper = shallow(
      <AudioPlayer
        isLoading={false}
        isPlaying={false}
        onPlayButtonClick={handlePlayButtonClick}
      >
        <audio />
      </AudioPlayer>);
  wrapper.find(`.track__button`).simulate(`click`);
  expect(handlePlayButtonClick).toHaveBeenCalledTimes(1);
});
