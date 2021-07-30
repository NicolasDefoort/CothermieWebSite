import '../CSS/EntretienChaudière.css'

export default function EntretienChaudière() {
    return (
        <div className="containerEntretienChaudière">
            <div className="containerEntretienRegulier">
                <div className= "containerText">
                    <h3>L'entretien régulier de votre chaudière par la SARL COTHERMIE c'est :</h3>
                    <ul>
                        <li>Une économie d’énergie de 8 à 12% (source ADEME)</li>
                        <li>Une durée de vie augmentée pour votre équipement</li>
                        <li>Un risque de panne 5 fois plus faible sur une installation entretenue</li>
                        <li>Une diminution des émissions de CO2</li>
                        <li>Une obligation légale une fois par an</li>
                        <li>Un fonctionnement en toute sécurité</li>
                        <li>Un contrôle systèmatique du taux de monoxyde de carbone (CO) dans votre logement</li>
                        <li>Un conseil personnalisé sur votre système de chauffage, son usage et éventuellement son amélioration</li>
                    </ul>
                </div>
                <div className="containerRightPart">
                <div className="rightPart">
                    <p>L'entretien annuel de votre chaudière : une obligation légale.</p>
                    <p>Voir la règlementation</p>
                </div>
                </div>
            </div>
            <div className="containerChaudière">
                <div className="containerText">
                    <h3>ENTRETIEN DE CHAUDIERE GAZ :</h3>
                    <h5>5 opérations de nettoyage</h5>
                    <ul>
                        <li>Corps de chauffe</li>
                        <li>Anti-refouleur / Extracteur</li>
                        <li>Brûleur</li>
                        <li>Veilleuse / Ionisation</li>
                        <li>Ramonage conduit d’évacuation des gaz brûlés (option)</li>
                    </ul>
                    <h5>8 CONTRÔLES / RÉGLAGES / MESURES</h5>
                    <ul>
                        <li>Réglage du débit de gaz et de la combustion</li>
                        <li>Contrôle des aquastats et réglage du débit de l’eau</li>
                        <li>Contrôle des organes de sécurité : clapet gaz, thermocouple,électro-vannes</li>
                        <li>Vérification du circulateur</li>
                        <li>Mise en pression du vase d’expansion</li>
                        <li>Mesure de la température eau chaude sanitaire</li>
                        <li>Mesure du débit de l’eau</li>
                        <li>Mesure du taux de CO ambiant</li>
                    </ul>
                </div>
                <div className="containerText">
                    <h3>ENTRETIEN DE CHAUDIERE FIOUL :</h3>
                    <h5>5 prises de mesure</h5>
                    <ul>
                        <li>Température des fumées</li>
                        <li>Température eau chaude sanitaire</li>
                        <li>Emission CO2 et CO ambiant</li>
                        <li>Débit de l’eau</li>
                        <li>Indice de noircissement</li>
                    </ul>
                    <h5>5 opérations de nettoyage</h5>
                    <ul>
                        <li>Corps de chauffe</li>
                        <li>Brûleur</li>
                        <li>Anti-refouleur / Extracteur</li>
                        <li>Veilleuse / Ionisation</li>
                        <li>Ramonage conduit d’évacuation des gaz brûlés (option)</li>
                    </ul>
                    <h5>6 contrôles / réglages</h5>
                    <ul>
                        <li>Contrôle des organes de sécurité</li>
                        <li>Contrôle des aquastatset réglage du débit de l’eau</li>
                        <li>Vérification du circulateur</li>
                        <li>Vérification des dispositifs de sécurité du brûleur</li>
                        <li>Vérification de la combustion</li>
                        <li>Mise en pression du vase d’expansion</li>
                    </ul>
                </div>
                

            </div>
        </div>
    );
}