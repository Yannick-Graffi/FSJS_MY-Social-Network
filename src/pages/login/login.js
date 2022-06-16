import { useState } from "react";
import {login} from "../../lib/Social-Network-Library";
import "../login/login.css"
import {useNavigate} from "react-router-dom"

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
            <div>
                <h2>Connexion</h2>
                <input type="text" className="emailLogin" onChange={readEmail} placeholder="E-mail"/>
                <input type="password" className="motDePasseLogin" onChange={readMotDePasse} placeholder="Mot de Passe"/>

                <button onClick={onClickConnect}>Connexion</button>

                {messageErreurLogin === "Wrong email or password" && "E-mail ou Mot de passe erronés "}
                {messageErreurLogin === "Email and password are required." && "E-mail et mot de passe requis."}
                                   
            </div>
        </div>
    );
}

export default Loginpage;