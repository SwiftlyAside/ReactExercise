import { combineReducers } from 'redux';
import postsReducer from './postsReducer';

const songsReducer = () => {
  return [
    { title: 'Coyote', duration: '3:53' },
    { title: 'Macarena', duration: '2:30' },
    { title: 'Scars', duration: '4:56' },
    { title: 'Violence', duration: '3:34' },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
  posts: postsReducer,
});
