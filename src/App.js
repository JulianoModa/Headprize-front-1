import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import { Store } from './store';


import Layout from "./layouts/Home.js";
import routes from "./routes"
function App() {
  return (
    <Provider store={Store}>
      <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Layout/>}>
              {
                routes.map((route, key) => (<Route key={key} path={route.path} element={<route.component />} />)) 
              }
              
            </Route>
            
            
          </Routes>
      </ BrowserRouter>
    </Provider>
  );
}

export default App;
