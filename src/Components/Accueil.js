import '../CSS/Accueil.css'
import imgTempo from '../Image/ImageTempo.jpg'

export default function Accueil(){
    return (
        <div className="containerAccueil">
            <img src={imgTempo} alt="Cothermie"/>
            <div className="PrésentationAccueil">
                <h3>Présentation</h3>
                <p>La SARL COTHERMIE est située à Saméon entre Orchies et Saint-amand-les-eaux. Spécialisé dans le chauffage et sanitaires les principales activités sont les suivantes : </p>
                <div className="containerChauffageSanitaire">
                    <div className="containerChauffageSanitaireElement">
                        <h5>Chauffage</h5>
                        <ul>
                            <li>Entretiens, dépannages et installations de chaudières </li>
                            <li>Réalisations de planchers chauffant</li>
                            <li>Installation de pompes à chaleur sur eau et sur air</li>
                            <li>Cumulus électriques</li>
                            <li>Ballons thermodynamiques</li>
                            <li>Détartrage</li>
                            <li>Désembouage</li>
                        </ul>

                    </div>
                    <div className="containerChauffageSanitaireElement">
                        <h5>Chauffage</h5>
                            <ul>
                                <li>Entretiens, dépannages et installations de chaudières </li>
                                <li>Réalisations de planchers chauffant</li>
                                <li>Installation de pompes à chaleur sur eau et sur air</li>
                                <li>Cumulus électriques</li>
                                <li>Ballons thermodynamiques</li>
                                <li>Détartrage</li>
                                <li>Désembouage</li>
                            </ul>
                    </div>

                </div>
            
            
            </div>
            

        </div>
    );
}