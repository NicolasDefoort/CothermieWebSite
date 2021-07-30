import '../CSS/Header.css'
import logoCothermie from '../Image/LogoCothermie.jpg'
import logoRGE from '../Image/RGE.jpg'
import logoQualigaz from '../Image/Qualigaz.jpg'
import logoAutre from '../Image/Autre.jpg'




export default function Header() {
    return (
        <div className="containerHeader">
            <div className="logoAutre">
                <img src={logoRGE} alt="Cothermie"/>
                <img src={logoQualigaz} alt="Cothermie"/>
                <img src={logoAutre} alt="Cothermie"/>
            </div>
            <div className="containerLogoCothermie"><img className="logoCothermie" src={logoCothermie} alt="Cothermie"/></div>
            <p className="contactHeader">
                <p className="addressHeader">
                    <div>1400 Rue de Beaumetz</div>
                    <div>59310 Saméon</div>
                </p>
                <div className="telHeader">06 87 54 52 29</div>
            </p>
            
        </div>
    );
}