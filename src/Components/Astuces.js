import '../CSS/Astuces.css'

export default function Astuces() {
    return (
        <div className="containerAstuces">
            <h3>Conseils pour réduire vos consommations tout en gardant du confort :</h3>
            <ul>
                <li>Maintenez une température maximale de 19 à 20°.</li>
                <li>Baissez la température la nuit et en cas d’absence (1°C en moins = 7 % d'économies).</li>
                <li>Réglez correctement vos vannes thermostatiques (si vous en disposez).</li>
                <li>Purgez vos radiateurs plusieurs fois par an sans éteindre la chaudière.</li>
                <li>Ne couvrez jamais vos radiateurs.</li>
                <li>Des petits équipements comme le thermostat d'ambiance et les têtes thermostatiques peuvent vous faire réaliser de 9% à 25% d'économies (source ADEME)</li>
            </ul>
            <h3>Conseils pour la remise en marche de votre chaudière :</h3>
            <ul>
                <li>Avant de redémarrer votre chaudière, vérifiez que l'alimentation gaz ou fioul soit ouverte.</li>
                <li>Mettez l'appareil sous tension électrique</li>
                <li>Allumez la veilleuse si votre chaudière en possède une ; sinon reportez-vous à la notice du constructeur.</li>
                <li>Si la chaudière est raccordée à un conduit de fumée, vérifiez que vos arrivées d'air sont dégagées.</li>
            </ul>
            <h3>Innovation : Pilotez votre chaudière depuis votre smartphone </h3>
            <p>Avec le thermostat netatmo, en plus de son rôle habituel de régulation, il permet de piloter votre chauffage depuis votre Smartphone. Il est compatible avec les chaudières individuelles fioul, gaz, bois et pompes à chaleur. Installé chez vous comme nouveau thermostat ou en remplacement de votre thermostat actuel.</p>
        </div>
    );
}