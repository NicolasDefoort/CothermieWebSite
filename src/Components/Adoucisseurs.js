import React from "react";
import { Link } from "react-router-dom";
import '../CSS/Adoucisseurs.css';
import adoucisseurs1 from '../Image/adoucisseurs1.jpg'
import adoucisseurs2 from '../Image/adoucisseurs2.jpg'
import adoucisseurs3 from '../Image/adoucisseurs3.jpg'

export default function Adoucisseurs(){


    return(
        <div className="adoucisseursHead">
            <img className="adoucisseurs1"  src={adoucisseurs1} alt="adoucisseurs1"/>
            <h1>Vous rencontrez un des phénomènes ci-dessus?</h1>
            <div className="text1">
                <p><b>Traces blanches :</b>  sur la vaisselle, les parois de douche, la robinetterie </p>
                <p><b>Entartrage :</b>de vos appareils ménagers, chaudière, Ballon d'eau chaude et canalisations </p>
                <p><b>Problème de peau :</b>   sèche, démangeaisons, Cheveux ternes, linge rêche. </p>
            </div>
            <h1>L'ADOUCISSEUR est la solution pour vous débarrasser de ces désagréments</h1>
            <p>Votre plomberie est débarrassée du calcaire, vos appareils ménagers durent plus longtemps, votre linge retrouve sa douceur, vos robinets sont étincelants et votre vaisselle brillante. Pour remédier au dépôt de calcaire et de tartre, un adoucisseur s’impose comme la solution efficace et pérenne.</p>
            <div className="text3">
                <div className="subText1">
                    <h1>FONCTIONNEMENT DE L'ADOUCISSEUR :</h1>
                    <p>L’adoucisseur d’eau se compose d’un bac de résine et d’un bac à sel. C’est au contact de la  résine échangeuse d’ions que l’eau calcaire va se transformer en eau adoucie.Un adoucisseur d’eau  fonctionne sur le principe de la captation des ions calcium (Ca2+) et des ions magnésium (Mg2+,) responsables de la présence du tartre dans les installations. L’eau qui passe par le bac de résine va être débarrassée des ions calcium et magnésium qui sont remplacés par des ions sodium (Na+).
                       Installé au point d’arrivée d’eau du logement, l’adoucisseur « filtre » l’eau calcaire et produit de l’eau adoucie qui n’entraine ni traces de calcaire, ni dépôt de tartre.</p>
                </div>
                <img src={adoucisseurs2} className="adoucisseurs2" alt="adoucisseurs2"/>
            </div>
            <h1>Intéressés?</h1>
            <p>Je vous propose de réaliser, chez vous, une étude personnalisée de la qualité de votre eau.</p>
            <Link to="/Contact">contact</Link>
            <h1>VOUS RENCONTREZ UN DES PHENOMENES CI DESSOUS ?</h1>
            <li>Mauvais goût </li>
            <li>Mauvaise odeur </li>
            <li>Goût de chlore</li>
            <li>Eau trouble</li>
            <div className="text4">
                <div className="subText2">
                    <h1>Le filtre à charbon actif est la solution pour y remédier</h1>
                    <p>Le charbon actif est un carbone qui a une légère charge électrique positive le rendant attirant aux produits chimiques et aux impuretés. Pendant que l'eau traverse le charbon actif, les ions négatifs des contaminants sont attirés sur la surface des granules de carbone.</p>
                </div>
                <img src={adoucisseurs3} className="adoucisseurs3" alt="adoucisseurs3"/>
            </div>
        </div>
    )
}