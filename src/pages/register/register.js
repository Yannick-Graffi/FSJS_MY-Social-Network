import "./register.css"
import React, { useState } from "react"
import { register } from "../../lib/Social-Network-Library";
import register_img from "../../assets/img/register_img.jpg"

function RegisterAccount() {

// Variables d'états pour les différents inputs
    const [prenom, setPrenom] = useState("");
    const [nom, setNom] = useState("");
    const [email, setEmail] = useState("");
    const [motDePasse, setMotDePasse] = useState("");
    const [confirmationMdP, setConfirmationMdP] = useState("");

// Variable d'état pour le message d'erreur

    const [messageErreur, setMessageErreur] = useState("");

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
    function confirmMotDePasse(e) {
        setConfirmationMdP(e.target.value)
    }

//Fonction qui se déclence au clic sur le bouton "Valider"

    const onClickRegister = async () => {
        if (motDePasse === confirmationMdP) {
            let result = await register(prenom, nom, email, motDePasse); // Utilisation de la fonction register
            console.log(result);    
            
            if (result.success === false) {
                setMessageErreur("Merci de renseigner tous les champs")
            } else {
                setMessageErreur("")
            }    
         
        } else {
            setMessageErreur("Attention, les mots de passe sont différents")   
        }
    }

    return (
        <div>
            <div className="divFlex">
                <img src={register_img} alt="" />
                <div className="register-container">

                    <h2>Créez votre compte</h2>

                    <input type="text" className="prenom" placeholder="Prénom" onChange={addPrenom}/>
                    <input type="text" className="nom" placeholder="Nom" onChange={addNom}/>
                    <input type="text" className="email" placeholder="E-mail" onChange={addEmail}/>
                    <input type="password" className="motDePasse" placeholder="Mot de passe"onChange={addMotDePasse}/>
                    <input type="password" className="motDePasse" placeholder="Confirmer mot de passe" onChange={confirmMotDePasse}/>

                    <button className="RegisterBtn" onClick={onClickRegister}>Valider</button>

                </div>
            </div>
                {
                messageErreur && <p className="messageErreur">{messageErreur}</p> 
                }
        </div>
    );
}

export default RegisterAccount;
