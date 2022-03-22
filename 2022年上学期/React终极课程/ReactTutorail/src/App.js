import React from 'react'

// src/App.js
import ImageToggle from "./Components/ImageToggle";

function App() {
  return (
    <ImageToggle>
      <img
        src="https://images.pexels.com/photos/10198426/pexels-photo-10198426.jpeg"
        alt=""
        width="300px"
      />
      <img
        src="https://images.pexels.com/photos/4386364/pexels-photo-4386364.jpeg"
        alt=""
        width="300px"
      />
      <img
        src="https://images.pexels.com/photos/9812128/pexels-photo-9812128.jpeg"
        alt=""
        width="300px"
      />
      <img
        src="https://images.pexels.com/photos/8746965/pexels-photo-8746965.jpeg"
        width="300px"
        alt=""
      />
    </ImageToggle>
  );
}

export default App