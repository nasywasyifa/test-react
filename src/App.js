// import logo from "./logo.svg";
// import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import User from "./User";
import Home from "./Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// const Button = ({ onPress, style }) => {
//   return (
//     <>
//       <button style={style} onClick={onPress}>
//         Click To Increment
//       </button>
//     </>
//   );
// };

//   const [count, setCount] = useState(0);

//   return (
//     <div className="App">
//       <Button
//         style={{ backgroundColor: "red", padding: "10px" }}
//         onPress={() => setCount(count + 1)}
//       />
//       <button
//         style={{ backgroundColor: "green", padding: "10px" }}
//         onPress={() => setCount(count - 1)}
//       />
//       <p>{count}</p>
//     </div>
//   );
// }
