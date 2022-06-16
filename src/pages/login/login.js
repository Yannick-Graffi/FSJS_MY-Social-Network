import { useState } from "react";
import {login} from "../../lib/Social-Network-Library";
import "../login/login.css"
import {useNavigate} from "react-router-dom"
import login_img from "../../assets/img/login_img.jpg"

function Loginpage() {
    
// Variables d'état pour récupérer les inputs
    const [emailLogin, setEmailLogin] = useState("");
    const [motDePasseLogin, setMotDePasseLogin] = useState("");

// Variable d'état pour le message d'erreur
    const [messageErreurLogin, setMessageErreurLogin] = useState("");

    let navigate = useNavigate();

// Fonction pour récupér la saisie des inputs

    function readEmail(e) {
        setEmailLogin(e.target.value)
    }

    function readMotDePasse(e) {
        setMotDePasseLogin(e.target.value)        
    }

// Fonction qui se déclenche au clic du bouton "connexion" pour se connecter au fil d'actualité

    const onClickConnect = async () => {
        let result = await login(emailLogin, motDePasseLogin); // Utilisation de la fonction login

        if (result.success === false) {
            setMessageErreurLogin(result.message);
        } else {
            setMessageErreurLogin("");
            navigate("/Actu", { replace: true});
        }
    }

    return (  
        <div>
            <div className="divFlex">
                <img src={login_img} alt="" />
                <div className="login-container">
                    <h2>Connexion</h2>
                    <input type="text" className="emailLogin" onChange={readEmail} placeholder="E-mail"/>
                    <input type="password" className="motDePasseLogin" onChange={readMotDePasse} placeholder="Mot de Passe"/>

                    <button onClick={onClickConnect}>Connexion</button>
             
                </div>
            </div>

            {messageErreurLogin === "Wrong email or password" && <p className="messageErreur">E-mail ou Mot de passe erronés.</p>}
            {messageErreurLogin === "Email and password are required." && <p className="messageErreur">E-mail et mot de passe requis.</p>}
                       
        </div>
    );
}

export default Loginpage;