import '../CSS/TvaCrédit.css'
import Aides from '../Image/AidesFinancières.PNG'

export default function TVA() {
    return (
        <div className="containerTva">
            <h2>Aides financières actuelles :</h2>
            <a href="https://www.ademe.fr/sites/default/files/assets/documents/guide-pratique-aides-financieres-renovation-habitat-2018.pdf"><img src={Aides} alt="Cothermie"/></a>
        </div>
    );
}