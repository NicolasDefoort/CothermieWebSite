import logo from './logo.svg';
import './App.css';
import SideMenu from './Components/SideMenu'
import Header from './Components/Header'
import {Route, Switch} from 'react-router-dom';
import Accueil from './Components/Accueil';
import Adoucisseurs from './Components/Adoucisseurs';
import EntretienChaudière from './Components/EntretienChaudière';
import RemplacementChaudière from './Components/RemplacementChaudière';
import Détartrage from './Components/Détartrage';
import PompeChaleur from './Components/PompesChaleur';
import Astuces from './Components/Astuces';
import AstucesConseils from './Components/AstucesConseils';
import Eau from './Components/Eau';






function App() {
  return (
    <div className="App">
      <Header/>
      <div className="containerSite">
        <SideMenu/>
        <Switch>
          <Route exact path='/' component={Accueil} />
          <Route exact path='/Adoucisseurs' component={Adoucisseurs}/>
          <Route exact path='/EntretienDeChaudière' component={EntretienChaudière}/>
          <Route exact path='/RemplacementDeChaudière' component={RemplacementChaudière}/>
          <Route exact path='/DétartrageDésembouage' component={Détartrage}/>
          <Route exact path='/PompeAChaleur' component={PompeChaleur}/>
          <Route exact path='/Astuces' component={Astuces}/>
          <Route exact path='/EauChaude' component={Eau}/>
          <Route exact path='/Contact'/>
          <Route exact path='/TVACréditDImpot'/>
          <Route exact path='/AstuceConseils' component={AstucesConseils}/>

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
