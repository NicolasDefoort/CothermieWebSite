
import '../CSS/SideMenu.css'
import React from "react";
import {useState} from "react";

import { Link } from 'react-router-dom';



export default function SideMenu() {
    const[over,onOver]=useState(false);

    return (
        <div className='listMenu'>
            <Link to="/Adoucisseurs" > <div className="elementList" id="first">Adoucisseurs</div></Link>
            <div className="elementList">Eau chaude</div>
            <div className="elementList" id="chauffage" onMouseEnter={()=>onOver(true)} onMouseLeave={()=>onOver(false)}>Chauffage</div>
            {
                over?
                <div className="overChauffage" onMouseEnter={()=>onOver(true)} onMouseLeave={()=>onOver(false)}>
                  <div className="overChauffageElement">Entretien de chaudière</div>
                  <div className="overChauffageElement">Remplacement de chaudière</div>  
                  <div className="overChauffageElement">Détartrage - Désembouage</div>  
                  <div className="overChauffageElement">Pompes à chaleur</div> 
                  <div className="overChauffageElement">Astuces</div>    

                </div>:false
            }
            <div className="elementList">Contact</div>
            <div className="elementList">TVA - Credit d'impôt</div>
            <div className="elementList">Astuces et conseils</div>
        </div>
        
    );
}