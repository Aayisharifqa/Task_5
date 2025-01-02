// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import './index.css';
// import Home from './Home.jsx';
// import About from './About.jsx';
// import Contact from './Contact.jsx';

// function App() {
//   return (
//     <Router>
//       <header style={styles.header}>
//         <nav style={styles.nav}>
//         <h1 style={styles.logo}>
//   <img src="https://cdn-icons-png.flaticon.com/128/12747/12747160.png" alt="Logo" style={{ height: '40px', marginRight: '10px' }} />
//   My Website
// </h1>
//           <ul style={styles.navLinks}>
//             <li style={styles.navItem}>
//               <Link to="/" style={styles.link}>Home</Link>
//             </li>
//             <li style={styles.navItem}>
//               <Link to="/About" style={styles.link}>About</Link>
//             </li>
//             <li style={styles.navItem}>
//               <Link to="/Contact" style={styles.link}>Contact</Link>
//             </li>
//           </ul>
//         </nav>
//       </header>
      
//       <main style={styles.main}>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/About" element={<About />} />
//           <Route path="/Contact" element={<Contact />} />
//         </Routes>
//       </main>
//     </Router>
//   );
// }

// const styles = {
//   header: {
//     backgroundColor: '#007BFF',
//     padding: '10px 20px',
//     color: '#fff',
//   },
//   nav: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   logo: {
//     fontSize: '24px',
//     fontWeight: 'bold',
//   },
//   navLinks: {
//     listStyleType: 'none',
//     display: 'flex',
//     margin: 0,
//     padding: 0,
//   },
//   navItem: {
//     marginLeft: '20px',
//   },
//   link: {
//     color: '#fff',
//     textDecoration: 'none',
//     fontSize: '16px',
//     transition: 'color 0.3s',
//   },
//   main: {
//     padding: '20px',
//   },
// };

// // Add hover effect for links
// styles.link[':hover'] = {
//   color: '#FFD700', // Changes to gold on hover
// };

// export default App;


// import React, { useState } from "react";

// function App() {
//   const [inputValue, setInputValue] = useState("");
//   const [imageIndex, setImageIndex] = useState(0);

//   // Array of image URLs
//   const images = [
//     "data:image/jpeg;base64,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",
//     "data:image/jpeg;base64,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",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvyiMA2RVu4TV_oUY3lGYQZO_tamdlgWWARpY5sWyeTHycMjmnQIZlwVfJTcWoqYVksuNr&s",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHewEwhz8g1kg9Kz6M_nFpihFp_cf3jFhfej3lPfgN_P5wIrJKsvgJ_Q&s",
//   ];

//   const handleInputChange = (e) => {
//     const newValue = e.target.value;
//     setInputValue(newValue);

//     // Update image index based on input length
//     if (newValue.trim() !== "") {
//       setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }
//   };

//   return (
//     <div>
//       <h1>Dynamic Images on Input</h1>
//       <input
//         type="text"
//         placeholder="Type something..."
//         value={inputValue}
//         onChange={handleInputChange}
//         style={{
//           padding: "10px",
//           margin: "20px 0",
//           fontSize: "16px",
//         }}
//       />
//       {inputValue.trim() && (
//         <div>
//           <img
//             src={images[imageIndex]}
//             alt={`Dynamic ${imageIndex}`}
//             style={{
//               display: "block",
//               marginTop: "20px",
//               borderRadius: "10px",
//             }}
//           />
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;

// import React from "react";
// import Hen from "./Hen";

// const App = () => {
//   const need = "Nutrition"; // Data to be passed down

//   return (
//     <div>
//       <h1>Props Drilling Example</h1>
//       <Hen need={need} />
//     </div>
//   );
// };
// export default App;

import {createContext} from "react";
import Hen from "./Hen";

export let nameContext = createContext();

function(){
  return (
    <nameContext.Provider value="water">
      <Hen/>
    </nameContext.Provider>
  )
}

export default App


// // App.jsx
// import React, { useState } from 'react';
// import styles from './Stomach';

// function App() {
//   const [clickCount, setClickCount] = useState(0);

//   // Handle button click to toggle states
//   const handleClick = () => {
//     setClickCount((prevCount) => prevCount + 1);
//   };

//   // Compute the text style based on the click count
//   let textStyle = { ...styles.textBase };

//   if (clickCount % 2 === 0) {
//     // On even clicks: black background, white text
//     textStyle = { ...textStyle, ...styles.backgroundBlack, ...styles.textWhite };
//   } else {
//     // On odd clicks: white background, black text
//     textStyle = { ...textStyle, ...styles.backgroundWhite, ...styles.textBlack };
//   }

//   return (
//     <div>
//       <h1 style={textStyle}>Hi Avi!</h1>
//       <button onClick={handleClick} style={{ marginTop: '20px', padding: '10px 20px', cursor: 'pointer' }}>
//         Click Me
//       </button>
//     </div>
//   );
// }

// export default App;

