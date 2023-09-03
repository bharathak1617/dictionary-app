import React from 'react';
import { useSelector } from 'react-redux';

const WordDetails = () => {
  const word = useSelector((state) => state.words.word);
  console.log(word);
  console.log(5);
  
  return (
    <div className="word-details">
      {word && (
        <div className="word-details-content">
          <h3>{word.word}</h3>
          {word.phonetics && (
            <div className="phonetics">
              {word.phonetics.map((phonetic, index) => (
                <div key={index}>
                  <p>{phonetic.text}</p>
                  <audio controls>
                    <source src={phonetic.audio} type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                </div>
              ))}
            </div>
          )}
          {word.meanings && (
            <div className="meanings">
              {word.meanings.map((meaning, index) => (
                <div key={index}>
                  <h4>{meaning.partOfSpeech}</h4>
                  <ul>
                    {meaning.definitions.map((definition, index) => (
                      <li key={index}>
                        <strong>Definition:</strong> {definition.definition}
                        {definition.example && (
                          <div>
                            <strong>Example:</strong> {definition.example}
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default WordDetails;
