import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';

import { useAuth } from '../hooks';
import { Home, Login, Signup, Settings } from '../pages';
import { Loader, Navbar } from './';

function PrivateRoute({ children, ...rest }) {
  const auth = useAuth();
  return auth.user? children :<Navigate to="/login" />;

 // return (
   // <Route
     // {...rest}
     // render={() => {
       // if (auth.user) {
         // return children;
        //}

       // return <Navigate to="/login" />;
      //}}
   // />
  //);
}

const Page404 = () => {
  return <h1>404</h1>;
};

function App() {
  const auth = useAuth();

  if (auth.loading) {
    return <Loader />;
  }

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          
          <Route exact path="/" element={<Home posts={Home} />}/>
            <Route exact path="/login" element={ <Login />}/>
              
            <Route exact path="/register" element={<Signup />}/>
           {/* <PrivateRoute exact path="/settings" element={<Settings />}/*/}
           <Route exact path="/settings" element={<PrivateRoute><Settings /></PrivateRoute> }/>
              

           
  
            <Route element={<Page404 />}/>


         
        
        </Routes>
      </Router>
    </div>
  );
}

export default App;
