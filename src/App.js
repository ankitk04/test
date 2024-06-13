// import logo from './logo.svg';
// import './Sidebar';
// import Sidebar from './Sidebar';
// import React from "react";
// import './App.css';
// import { useState } from "react";
// import About from './Components/About/About';
// import Contact from './Components/Contact/Contact';
// import Footer from './Components/Footer/Footer';
// import Header from './Components/Header/Header';
// import Login from './Components/Login/Login';
// import { Link, createBrowserRouter } from 'react-router-dom';
// import { RouterProvider } from 'react-router-dom';


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className='box1'>
//       <h1>Hello</h1>
//     </div>
//   );
// }
// export default App;

// function App() {
//   return(
//     <Sidebar/>
//   );
// }
// export default App;

// function App(){
//   return(
//     <>
//       <Sidebar user = "ANKIT" id = '123'/>
//       <Sidebar user = "ABCD" id ='1234'/>
//     </>
//   )
// }
// export default App



// function App() {
//   let [counter, setCounter] = useState(3)
//   const addValue = () => {
//     setCounter((Counter) => Counter + 1);
//   }
//   const reduceValue = () => {
//     setCounter((Counter) => Counter - 1);
//   }

//   return (
//     <>
//       <div className="bg-dark container text-white ">
//         <h1 className="text-center">Counter Application in react</h1>
//         <br></br>
//         <div className="d-flex justify-content-center align-items-center">
//           <button onClick={addValue} className="bg-success text-light">Add Value</button>
//           <h1>Counter: {counter}</h1>
//           <button onClick={reduceValue} className="bg-danger text-light">Decrease Value</button>
//         </div>
//       </div>
//     </>
//   )
// }
// export default App;

// function App() {
//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <Header />
//     },
//     {
//       path: "/about",
//       element: <><Header /><About /></>
//     },
//     {
//       path: "/contact",
//       element: <Contact />
//     }
//   ])

//   return (
//     <>
//       <h1>React Router Example</h1>
//       <RouterProvider router={router} />
//     </>
//   )
// }
// export default App


import React from 'react';

function App() {
  return (
    <div className="App">
      <h1><center>Hi! Welcome to Lovely Professional University</center></h1>
    </div>
  );
}

export default App;
