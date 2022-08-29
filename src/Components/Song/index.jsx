import React from 'react';
import { SongRow, RemoveSong, SongName } from './styles';
import { GrTrash } from "react-icons/gr";


const Song = ({ songs, removeSong }) => {
  return songs.map((song, index) => (
    <SongRow key={index}>
      <SongName key={song.id}>{song.name}</SongName>
      <RemoveSong onClick={() => removeSong(song.id)}><GrTrash /></RemoveSong>
    </SongRow>
  ))
}
export default Song;