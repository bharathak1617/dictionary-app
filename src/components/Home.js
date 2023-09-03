import './diction.css';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchWord } from '../actions/wordActions';
import Loader from './Loader';
import WordDetails from './WordDetails';

const Home = () => {
  const [word, setWord] = useState('');
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.words.isLoading);

  const handleSearch = () => {
    
    if (word.trim() !== '') {
      console.log(word);
      dispatch(searchWord(word));
      setWord('');
    }
  };

  return (

    <div className="home">
      <div className="search-bar">
        <input
          type="text"
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {isLoading && <Loader/>}
      <div className='output'>
          <WordDetails/>
      </div>
    </div>
  );
};

export default Home;
