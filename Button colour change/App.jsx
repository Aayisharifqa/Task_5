
import React, { useState } from 'react';
import styles from './Stomach';

function App() {
  const [clickCount, setClickCount] = useState(0);

  // Handle button click to toggle states
  const handleClick = () => {
    setClickCount((prevCount) => prevCount + 1);
  };

  // Compute the text style based on the click count
  let textStyle = { ...styles.textBase };

  if (clickCount % 2 === 0) {
    // On even clicks: black background, white text
    textStyle = { ...textStyle, ...styles.backgroundBlack, ...styles.textWhite };
  } else {
    // On odd clicks: white background, black text
    textStyle = { ...textStyle, ...styles.backgroundWhite, ...styles.textBlack };
  }

  return (
    <div>
      <h1 style={textStyle}>Dynamic Text Styling</h1>
      <button onClick={handleClick} style={{ marginTop: '20px', padding: '10px 20px', cursor: 'pointer' }}>
        Click Me
      </button>
    </div>
  );
}

export default App;