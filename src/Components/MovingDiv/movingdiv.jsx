import React from 'react';
import './movingdiv.css';

function MovingDiv({ direction }) {
  const images = [
    "https://source.unsplash.com/random/1000*1000?sports",
    "https://source.unsplash.com/random/1000*1000?travel",
    "https://source.unsplash.com/random/1000*1000?people",
    "https://source.unsplash.com/random/1000*1000?event",
    "https://source.unsplash.com/random/1000*1000?work",
    "https://source.unsplash.com/random/1000*1000?friends",
    "https://source.unsplash.com/random/1000*1000?pattern",
    "https://source.unsplash.com/random/1000*1000?flim",
    "https://source.unsplash.com/random/1000*1000?spritiual",
    "https://source.unsplash.com/random/1000*1000?lakes",
    "https://source.unsplash.com/random/1000*1000?mountains",
    "https://source.unsplash.com/random/1000*1000?cars",
    "https://source.unsplash.com/random/1000*1000?children",
    "https://source.unsplash.com/random/1000*1000?building",
    "https://source.unsplash.com/random/1000*1000?wedding",

  ];

  return (
    <>
    <div className={`moving-div ${direction}`}>
      {images.map((image) => (
        <div className="imageGroup">
          <img
          src={image} alt='some error'
        />
        </div>
      ))}
    </div>
  </>
  );
}

export default MovingDiv;
