import logo from './logo.svg';
import './App.css';
import SideMenu from './Components/SideMenu'
import Header from './Components/Header'
import {Route, Switch} from 'react-router-dom';
import Accueil from './Components/Accueil'

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="containerSite">
        <SideMenu/>
        <Switch>
          <Route exact path='/' component={Accueil} />
        </Switch>
        {/* 
        import { Link } from 'react-router-dom';
        
        <Link to="/..." ></Link>   
        */}
      
      </div>
      
     
      
      
      
      
    </div>
  );
}

export default App;
