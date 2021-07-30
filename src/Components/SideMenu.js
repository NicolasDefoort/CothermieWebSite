
import '../CSS/SideMenu.css'
import React from "react";
import {useState} from "react";

import { Link } from 'react-router-dom';



export default function SideMenu() {
    const[over,onOver]=useState(false);

    return (
        <div className='listMenu'>
            <Link to="/Adoucisseurs" > <div className="elementList" id="first">Adoucisseurs</div></Link>
            <Link to="/EauChaude" ><div className="elementList">Eau chaude</div></Link>
            <div className="elementList" id="chauffage" onMouseEnter={()=>onOver(true)} onMouseLeave={()=>onOver(false)}>Chauffage</div>
            {
                over?
                <div className="overChauffage" onMouseEnter={()=>onOver(true)} onMouseLeave={()=>onOver(false)}>
                  <Link to="/EntretienDeChaudière"><div className="overChauffageElement">Entretien de chaudière</div></Link>
                  <Link to="/RemplacementDeChaudière"><div className="overChauffageElement">Remplacement de chaudière</div></Link> 
                  <Link to="/DétartrageDésembouage"><div className="overChauffageElement">Détartrage - Désembouage</div></Link>
                  <Link to="/PompeAChaleur"><div className="overChauffageElement">Pompes à chaleur</div> </Link>
                  <Link to="/Astuces"><div className="overChauffageElement">Astuces</div></Link>

                </div>:false
            }
            <Link to="/EntretienDeChaudière"><div className="elementList">Contact</div></Link>
            <Link to="/EntretienDeChaudière"><div className="elementList">TVA - Credit d'impôt</div></Link>
            <Link to="/EntretienDeChaudière"><div className="elementList">Astuces et conseils</div></Link>
        </div>
        
    );
}