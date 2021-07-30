import '../CSS/RemplacementChaudière.css'

export default function RemplacementChaudière() {
    return (
        <div className="containerRemplacementChaudière">
            
            <div className="borderBox">
                <h3>Vous devez remplacer votre chaudière ?</h3>
                <p>
                    <div>Je vous aide à faire le bon choix, économe en énergie et compatible avec votre budget</div>
                    <div>Je suis un professionnel QUALIBRAT RGE spécialiste de l'éco-rénovation</div>
                </p>
            </div>

            <p><div>Les nouveaux équipements de chauffage ont considérablement évolué en termes de confort et d’efficacité énergétique : par rapport à votre chaudière actuelle, vous allez pouvoir réaliser de très importantes économies d’énergie et améliorer le confort en eau chaude sanitaire selon la solution choisie. 
                </div><div>De plus, étant professinonel RGE vous pourrez bénéficier des conditions de financement exceptionnelles, grâce aux aides de l'état</div></p>
        
            <h3>Voici les principales solutions techniques qui s’offrent à vous :</h3>
            <p>Chaque technologie est proposée avec un système d’eau chaude sanitaire adapté à vos besoins et à vos habitudes (production instantanée, accumulée …)</p>
            <h5>La chaudière à condensation</h5>
            <ul>
                <li>Son principe est de récupérer la chaleur de la vapeur d’eau produite lors de la combustion.</li>
                <li>Elle permet ainsi d’économiser jusqu’à 30%(source ADEME) d’énergie par rapport à votre chaudière ancienne.</li>
                <li>Elle s’adapte à tous les logements : en version murale ou en version au sol.</li>
                <li>Pour plus d’économies, elle peut être associée à un chauffe-eau solaire.</li>
            </ul>
            <h5>La chaudière basse température</h5>
            <ul>
                <li>Votre solution la plus économique à l’achat avec néanmoins une économie d’énergie jusqu’à 12% par rapport à une chaudière standard.</li>
            </ul>
            <h5>La pompe à chaleur air/eau en relève d’une chaudière</h5>
            <ul>
                <li>Alimentée à l’electricité, elle permet de capter les calories présentes dans l'air extérieur pour les restituer dans votre logement et le chauffer à moindre coût.</li>
                <li>Son fonctionnement est optimisé lorsqu’elle est couplée à votre chaudière gaz ou fioul.</li>
            </ul>
            <h5>La chaudière hybride</h5>
            <ul>
                <li>Elle associe 2 éléments pour fournir tous vos besoins de chauffage et d’eau chaude sanitaire :</li>
                    <ul>
                        <li>Une pompe à chaleur électrique de petite puissance</li>
                        <li>Une chaudière à condensation au gaz ou au fioul</li>
                    </ul>
                <li>Selon la température extérieure et vos beoins, un système intelligent commande l’utilisation de l’un ou l’autre des 2 éléments afin d’optimiser constamment la consommation d’énergie, tout en assurant votre confort.</li>
                <li>Son installation ne demande pas de travaux importants.</li>
            </ul>

            <h5>Toutes les aides sur :  <a href="http://ww38.renovation-info-service-gouv.fr">renovation-info-service-gouv.fr</a></h5>
            <h5>Information sur les crédits d'impôt :  <a href="TVACréditDImpot">Crédits d'impôt</a></h5>
            <h5>Financements : </h5>
            <div>En tant qu'installateur partenaire, je peux vous faire bénéficier de taux intéressant pour le financement de vos projets. </div>
        </div>
        
    );
}