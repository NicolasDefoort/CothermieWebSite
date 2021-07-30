import '../CSS/Détartrage.css'
import img1 from '../Image/Image1Boue.jpg'
import img2 from '../Image/image2.jpg'

export default function Détartrage() {
    return (
        <div className="containerDétartrage">
            <p>Le détartrage et le désembouage de vos canalisations et appareils contribuent au bon fonctionnement de votre installation tout en réduisant la consommation d’énergie</p>
            <div className="containerIntervention">
                <h4>Exemple d'intervention : </h4>
                <div className="containerImgExemple">
                    <div className="exempleElement">
                        <p>Présence de boues épaisses et dépots ferreux bouchant les boucles de plancher chauffant.</p>
                        <img src={img1}/>
                    </div>
                    <div className="exempleElement">
                        <p>Résultat après désembouage : excellents débits et problème de chauffe résolu</p>
                        <img src={img2}/>
                    </div>
                </div>
            </div>
            <h3>Détartrage du réseau sanitaire</h3>
            <ul>
                <li>Le détartrage consiste à éliminer le calcaire qui se forme dans vos canalisations et dans l’échangeur sanitaire de votre appareil.</li>
                <li>Le détartrage est nécessaire à la fois pour allonger le durée de vie de votre chaudière, améliorer le rendement de votre installation et votre confort.</li>
                <li>Nous recommandons d’effectuer un détartrage tous les 3 à 5 ans selon la dureté de l’eau dans votre région.</li>
            </ul>
            <h3>Désembouage</h3>
            <ul>
                <li>Le désembouage consiste à rincer et traiter vos canalisations pour éliminer les dépôts boueux qui les obstruent peu à peu et nuisent au rendement de l’ensemble de votre installation de chauffage.</li>
                <li>Je recommande d’effectuer le désembouage de vos canalisations lors du changement de votre chaudière et ou moins à un intervalle de 3 à 5 ans si vous avez un plancher chauffant basse température ou des canalisations de radiateur en PER.</li>
                

            </ul>
        
        </div>

        
        
    );
}