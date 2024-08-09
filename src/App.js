import Header from './Header';
import ImageSlider from './ImageSlider';
import './App.css';
import { useState } from 'react';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           {/*Edit <code>src/App.js</code> and save to reload.*/}
//           Hello, Dinesh!
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//         <h1>Hello, Dinesh!!</h1>
//       </header>
//     </div>
//   );
// }

const App = () => {
  const [counter, setCounter] = useState(0)
  const incrementCounter = () => setCounter((prevCount) => prevCount + 1)
  const decrementCounter = () => setCounter((prevCount) => prevCount - 1)
  return (
    <div className="App">
      <Header />
      <h2>Hello, Dinesh!!</h2>
      <button onClick={decrementCounter} className="px-4 py-2 bg-gray-100 bg-center rounded-lg mx-6">-</button>
      <p className='font-bold bg-center p-4 m-4'>{counter}</p>
      <button onClick={incrementCounter} className="px-4 py-2 bg-gray-100 bg-center rounded-lg mx-6">+</button>
      <ImageSlider />
    </div>
  )
}

export default App;
