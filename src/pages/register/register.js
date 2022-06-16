import "./register.css"
import React, { useState } from "react"
import {register} from "../../lib/Social-Network-Library";

function RegisterAccount() {

// Variables d'états pour les différents inputs
    const [prenom, setPrenom] = useState("");
    const [nom, setNom] = useState("");
    const [email, setEmail] = useState("");
    const [motDePasse, setMotDePasse] = useState("");

// Fonctions pour récupérer la saisie des différents inputs
    function addPrenom(e) {
        setPrenom(e.target.value)
    }
    function addNom(e) {
        setNom(e.target.value)
    }
    function addEmail(e) {
        setEmail(e.target.value)
    }
    function addMotDePasse(e) {
        setMotDePasse(e.target.value)
    }

//Fonction qui se déclence au clic sur le bouton "Valider"
    const onClickRegister = async () => {

        let result = await register(prenom, nom, email, motDePasse); // Utilisation de la fonction register
        console.log(result);
    }


    return (
        
        <div className="register-container">
            <h2>Créez votre compte</h2>

            <input type="text" className="prenom" placeholder="Prénom" onChange={addPrenom}/>
            <input type="text" className="nom" placeholder="Nom" onChange={addNom}/>
            <input type="text" className="email" placeholder="E-mail" onChange={addEmail}/>
            <input type="text" className="motDePasse" placeholder="Mot de passe"onChange={addMotDePasse}/>

            <button className="RegisterBtn" onClick={onClickRegister}>Valider</button>
        </div>
    );
}

export default RegisterAccount;
