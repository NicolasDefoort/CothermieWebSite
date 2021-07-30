import React from 'react';
import '../CSS/Eau.css';
import eau1 from '../Image/Eau1.jpg';
import eau2 from '../Image/Eau2.jpg';
import eau2bis from '../Image/Eau2bis.jpg';
import eau3 from '../Image/Eau3.jpg';
import eau3bis from '../Image/Eau3bis.jpg';


export default function Eau() {

    return (
        <div className="eauHead">
            <h1>Différentes possibilités sont possibles pour la production d'eau chaude :</h1>
            <li>Electrique</li>
            <li>Thermodynamique</li>
            <li>Solaire</li>
            <li>Associé à votre chaudière</li>
            <div className="text3">
                <img src={eau1} className="eau1" alt="eau1"/>
                <div className="subText3">
                    <h1>BALLON ELECTRIQUE​</h1>
                    <p>L'eau est chauffée par une résistance électrique.
                       Deux types de résistances existent :</p>
                    <p><b>Blindée : </b>moins chère à l'achat mais résiste moins au calcaire.</p>
                    <p><b>Stéatite : </b>plus chère mais ne favorise pas le dépôt de calcaire, ce modèle est le plus souvent installé dans notre région).</p>
                    <p>les + : Moindre coût pour un remplacement.</p>
                    <p>les -  : Coût de production d'eau chaude plus élevé que les solutions ci dessous présentées.</p>
                </div>
            </div>

            <div className="text4">
                <div className="subText4bis">
                    <img src={eau2} className="eau2" alt="eau2"/>
                    <img src={eau2bis} className="eau2bis" alt="eau2bis"/>
                </div>
                <div className="subText4">
                    <h1>BALLON THERMODYNAMIQUE​</h1>
                    <p>L'eau est chauffée par une pompe à chaleur située au dessus du ballon.
                       La chaleur de l'air libérée par des appareils électroménagers tels que le congélateur ou la machine à laver est utilisée pour faire de l'eau chaude.
                       Jusq'uà 70 % d'économies sur votre production d'eau chaude.</p>
                       <p>Crédits d'impôt et TVA réduite pour ce type de produit ici</p>  
                       <p>les + :    Couplé à une VMC le rendement est encore amélioré.</p>
                       <p>Implantation simple ne nécessitant pas de gros travaux.</p>
                       <p>60 % d'économies sur la production d'eau chaude</p>
                       <p>Ressource inépuisable et non polluante.</p>
                       <p>les -  : Prix plus élevé qu'un ballon électrique (mais retour sur l'investissement plus ou moins rapide selon les consommations d'eau)</p>
                </div>
            </div>

            <div className="text5">
                <div className="subText5bis">
                    <img src={eau3} className="eau3" alt="eau3"/>
                    <img src={eau3bis} className="eau3bis" alt="eau3bis"/>
                </div>
                <div className="subText5">
                    <h1>BALLON SOLAIRE​</h1>
                    <p>L'eau est chauffée naturellement par le soleil. Un appoint électrique prendra le relais en cas de mauvais temps.
                       Jusqu'à 70 % d'économies sur votre production d'eau chaude.</p>
                       <p>Crédits d'impôt et TVA réduite pour ce type de produit ici</p>  
                       <p>les + :    Energie inépuisable et non polluante.</p>
                       <p>Réalisations d'économies conséquentes sur la production d'eau chaude.</p>
                       <p>Frais de maintenance faible.</p>
                       <p>Possibilité de coupler les capteurs à la chaudière pour réaliser des économies de chauffage (soutien de chauffage solaire) </p>
                       <p>les -  :   Coût de l'investissement</p>
                       <p>Nécessité d'un appoint en cas d'absence de soleil.</p>
                       <p> Travaux nécessitant une intervention en toiture.</p>
                </div>
            </div>
        </div>
    );
}