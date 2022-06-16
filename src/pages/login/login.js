import { useState } from "react";
import {login} from "../../lib/Social-Network-Library";

function Loginpage() {
    
// Variables d'état pour récupérer les inputs
    const [emailLogin, setEmailLogin] = useState("");
    const [motDePasseLogin, setMotDePasseLogin] = useState("");

// Variable d'état pour le message d'erreur
    const [messageErreurLogin, setMessageErreurLogin] = useState("");

// Fonction pour récupér la saisie des inputs

    function readEmail(e) {
        setEmailLogin(e.target.value)
    }

    function readMotDePasse(e) {
        setMotDePasseLogin(e.target.value)        
    }

// Fonction qui se déclenche au clic du bouton "connexion" pour se connecter au fil d'actualité

    const onClickConnect = async () => {
        let result = await login(email, password); // Utilisation de la fonction login

        if (result.success === false) {
            setMessageErreurLogin(result.message);
        } else {
            setMessageErreurLogin("");
        }
    }

    return (  
        <div>
            <h1>Réseau Social</h1>
            <div>
                <input type="text" className="emailLogin" onChange={readEmail}/>
                <input type="text" className="motDePasseLogin" onChange={readMotDePasse}/>

                <button onClick={onClickConnect}>Connexion</button>
            </div>
        </div>
    );
}

export default Loginpage;