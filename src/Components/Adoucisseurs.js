import React from "react";
import '../CSS/Adoucisseurs.css';
import adoucisseurs1 from '../Image/adoucisseurs1.jpg'
import adoucisseurs2 from '../Image/adoucisseurs2.jpg'
import adoucisseurs3 from '../Image/adoucisseurs3.jpg'

export default function Adoucisseurs(){


    return(
        <div className="adoucisseursHead">
            <img className="adoucisseurs1"  src={adoucisseurs1} alt="adoucisseurs1" />
        </div>
    )
}