import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import AddSong from '../addSongs';
import Song from '../Song';
import { Container, Title, SortButton } from './styles';


const ListSongs = () => {
  const [songs, setSongs] = useState([]);
  const [isAscOrder, setIsAscOrder] = useState(true);

  const addSong = song => {
    const { name } = song;
    if (!name || /^\s*$/.test(name)) {
      return;
    }

    const newSongs = [song, ...songs];
    setSongs(newSongs);
  };

  const removeSong = (id) => {
    const removedArr = [...songs].filter(song => song.id !== id);

    setSongs(removedArr);
  };

  const handleSorting = () => {
    setIsAscOrder(!isAscOrder);
    const order = !isAscOrder ? 'asc' : 'desc';
    const newOrder = _.orderBy(songs, 'name', order);
    setSongs(newOrder);
  }

  return (
    <Container>
      
      <Title>List your favorite songs here...</Title>
      <AddSong onSubmit={addSong}></AddSong>
      {songs.length >= 2 && (
        <SortButton type='button' onClick={() => handleSorting()}>Sort list</SortButton>
      )}
      <Song
        songs={songs}
        removeSong={removeSong}
      />
    </Container>
  )
}

export default ListSongs;