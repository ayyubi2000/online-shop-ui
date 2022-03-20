import {Routes , Route} from 'react-router-dom';
import Index from "./Layout/Main/Main";
import Home from "./Pages/Home/Home"


function App() {
  return (
    		<Routes>
          <Route path="/" element={<Index/>} >
              <Route path="/home" element={<Home/>} />
          </Route>
			</Routes>
  );
}
export default App;
