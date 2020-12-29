// Action creator
// eslint-disable-next-line import/prefer-default-export
export const selectSong = song => {
  // Return an action.
  return {
    type: 'SONG_SELECTED',
    payload: song,
  };
};

export const fetchPosts = () => {
  return {
    type: 'FETCH_POSTS',
  };
};
