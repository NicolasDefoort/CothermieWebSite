import '../CSS/AstucesConseils.css'

export default function AstucesConseils() {
    return (
        <div className="containerAstucesConseils">
            <h3>CONSEILS CHAUFFAGE :</h3>
            <ul>
                <li>Maintenez une température maximale de 19 à 20°.</li>
                <li>Baissez la température la nuit et en cas d’absence (1°C en moins = 7 % d'économies).</li>
                <li>Réglez correctement vos vannes thermostatiques (si vous en disposez).</li>
                <li>Purgez vos radiateurs plusieurs fois par an sans éteindre la chaudière.</li>
                <li>Ne couvrez jamais vos radiateurs.</li>
                <li>A la fin de la saison de chauffe : ouvrez à fond vos robinets thermostatiques. cela évitera qu'ils ne se grippent pendant l'été.</li>
                <li>Des petits équipements comme le thermostat d'ambiance et les têtes thermostatiques peuvent vous faire réaliser de 9% à 25% d'économies (source ADEME)</li>
            </ul>
            <h3>CONSEILS POUR LA REMISE EN MARCHE DE VOTRE CHAUDIERE :</h3>
            <ul>
                <li>Avant de redémarrer votre chaudière, vérifiez que l'alimentation gaz ou fioul soit ouverte.</li>
                <li>Mettez l'appareil sous tension électrique</li>
                <li>Allumez la veilleuse si votre chaudière en possède une ; sinon reportez-vous à la notice du constructeur.</li>
                <li>Si la chaudière est raccordée à un conduit de fumée, vérifiez que vos arrivées d'air sont dégagées.</li>
            </ul>
            <h3>CONSEILS SANITAIRES :</h3>
            <ul>
                <li>Avant une abscence prolongée : coupez votre alimentation d'eau générale. cela peut éviter de gros soucis en cas de fuite...s</li>
                <li>Fond de cuvette wc noir : comment nettoyer ?</li>
                <ul>
                    <li>Verser une bouteille de lessive de soude avant d'aller vous coucher et le lendemain au premier pipi ... tout est parti !</li>
                </ul>
                <li>Comment réduire la consommation d'eau dans les WC ?</li>
                <ul>
                    <li>En installant un mécanisme 3/6 Litres pour les grosses et les petites commissions</li>
                    <li>En pliant un peu la tige du floteur (si votre mécanisme est de ce type)</li>
                    <li>En plaçant une bouteille d'eau de 1L dans le réservoir (vous économisez 1 L par chasse)</li>
                </ul>
            </ul>
        </div>
    );
}