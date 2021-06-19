import { Navbar } from "./components/navbar/Navbar";
import { Home } from "./components/pages/HomePageComponents/Home";
import { Route } from 'react-router-dom'
import { Main } from "./components/pages/UsePageComponents/Main";
function App() {
  return (
    <div>
      <div className="App bg-gradient-to-br from-blue-400  via-blue-600 to-blue-600 p-6 ">
        <Navbar/>
        <Route exact path='/' component={Home} />
        <Route path='/use' component={Main} />
      </div>
    </div>
  );
}

export default App;
