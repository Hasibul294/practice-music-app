import React from 'react';
import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa';

const PlayPause = ({ isPlaying, activeSong, song, handlePause, handlePlay }) => (isPlaying && activeSong?.title === song.title ? (
  <FaPauseCircle
    size={60}
    className="text-blue-400"
    onClick={handlePause}
  />
) : (
  <FaPlayCircle
    size={60}
    className="text-blue-400"
    onClick={handlePlay}
  />
));

export default PlayPause;
