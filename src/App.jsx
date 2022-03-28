import { Routes, Route } from 'react-router-dom';
import Main from "./Layout/Main/Main";
import "./Assets/Style/Config.scss";
import Home from "./Pages/Home/Home";

function App() {
  return (
      <Routes>
          <Route path="/" element={<Main/>} >
              <Route path="/" element={<Home/>} />
          </Route>
			</Routes>
  );
}
export default App;
