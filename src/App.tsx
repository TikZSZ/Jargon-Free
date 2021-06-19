import { Navbar } from "./components/navbar/Navbar";
import { Route,Switch} from 'react-router-dom'
import {useMediaQuery} from "./components/useMediaQuery"
import { lazy ,Suspense} from "react";
import { SuspenseLoader } from "./components/SuspenseLoader";

const Logo=lazy(()=>import("./components/navbar/NavLogo"))
const Home=lazy(()=>import("./components/pages/HomePageComponents/Home"))
const Main=lazy(()=>import("./components/pages/UsePageComponents/Main"))


function App() {
  const isMobile=useMediaQuery('(max-width:640px)')
  return (
    <div>
        {!isMobile?(
          <div className="App bg-gradient-to-br from-blue-400  via-blue-600 to-blue-600 p-6 ">
            <Suspense fallback={<SuspenseLoader/>}>
            <Navbar/>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/use' component={Main} />
                <Route  path='/test' component={SuspenseLoader} />
              </Switch>
            </Suspense>
          </div>
        ):(
          <div className="bg-gradient-to-br from-blue-400  via-blue-600 to-blue-600  pt-1">
            <Suspense fallback={<SuspenseLoader/>}>
              <Logo/>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/use' component={Main} />
                <Route  path='/test' component={SuspenseLoader} />
              </Switch>
              <Navbar/>
            </Suspense>
            
          </div>
        )}
    </div>
  )
}

export default App;
