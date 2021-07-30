import '../CSS/PompeChaleur.css'
import imgPompe from '../Image/pOmpeChaleurimg.PNG'
import imgP1 from '../Image/Partenaire1.PNG'
import imgP2 from '../Image/Partenaire2.png'



export default function PompeChaleur() {
    return (
        <div className="containerPompeChaleur">
            <div className='containerPompe'>
                <div>
                    <h2>Vente et installation de pompes à chaleur</h2>
                    <p>Pompes à chaleur géothermiques et aérothermiques</p>
                </div>
                <img src={imgPompe} alt='Cothermie'/>
            </div>
            <p>Crédits d'impôt-TVA réduite et primes pour ce type de produit : <a href="TVACréditDImpot">Crédits d'impôt</a></p>
            <h2>Partenaires</h2>
            <div className="containerImgPartenaires">
                <img src={imgP1} alt="Cothermie"/>
                <img src={imgP2} alt="Cothermie"/>
            </div>
            <h2>Financements</h2>
            <p>En tant qu'installateur partenaire, je peux vous faire bénéficier de taux intéressant pour le financement de vos projets. </p>

            
        </div>
    );
}