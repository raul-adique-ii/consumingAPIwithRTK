import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import Paper from '@material-ui/core/Paper';

import { loadCharacters } from '../store/characters';

// import Cards from './Cards';

const List = () => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   fetchChars();
  // }, []);

  // const fetchChars = () => {
  //   dispatch(loadCharacters());
  // };

  useEffect(() => {
    dispatch(loadCharacters());
  }, []);

  const characters = useSelector(
    (state) => state.entities.characters.list.results
  );

  return (
    <>
      {characters.map((char) => (
        <li>{char.name}</li>
      ))}
    </>
  );
};

export default List;
