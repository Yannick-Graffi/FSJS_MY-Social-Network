import { useState, useEffect } from "react";
import "../profil/profil.css"
import { getCurrentUserProfile, updateCurrentUserProfile} from "../../lib/Social-Network-Library";

function Profil() {
    // const[userId, setUserId] = useState("");
// Variables d'état des infos utilisateur
    const[userPrenom, setUserPrenom] = useState("");
    const[userNom, setUserNom] = useState("");
    const[userMail, setUserMail] = useState ("");
    const[userAge, setUserAge] = useState();
    const[userMetier, setUserMetier] = useState("");

// Variable d'état qui vérifie le clic sur le bouton "modifier profil"
    const[onClickChangeInfos, setChangeInfos] = useState(false)

// utilisation de la fonction getCurrentUserProfile de la librairie pour récupérer
// les infos utilisateurs depuis le serveur

    const getUserId = async () => {
        let result = await getCurrentUserProfile(); 
        // setUserId(result._id);
        setUserPrenom(result.firstname)
        setUserNom(result.lastname)
        setUserMail(result.email)
        setUserAge(result.age)
        setUserMetier(result.occupation)
        console.log(result);
    }
    useEffect(() =>{
        getUserId();
    }, [])

    function changeInfos () { // fonction qui change le boléen de la variable
        if (onClickChangeInfos) {
            setChangeInfos(false)
        } else{
            setChangeInfos(true)
        }
    }
    
    // Fonctions pour récupérer les nouvelles infos utilisateur
        function changePrenom(e) {
            setUserPrenom(e.target.value)
        }
        function changeNom(e) {
            setUserNom(e.target.value)
        }
        function changeMail(e) {
            setUserMail(e.target.value)
        }
        function changeAge(e) {
            setUserAge(e.target.value)
        }
        function changeMetier(e) {
            setUserMetier(e.target.value)
        }

// Fonction de la libraire pour mettre à jour les infos utilisateur en cliquant sur le bouton "valider"
    const validerChangeInfos = async () => {
        let result = await updateCurrentUserProfile(userPrenom, userNom, userMail, userAge, userMetier)
        setChangeInfos(false)
        
    }

    return (  

        <div className="profil-container">
            <img src="" alt=""></img>
            
        { onClickChangeInfos // Si l'utilisateur clique sur le bouton
          ? <div className="infos-container"> {/* Alors tu affiches les inputs */}  
                <h3>Modifier profil</h3>
                <div className="input-container">
                    <input type="text" 
                        className="newInput" 
                        defaultValue={userPrenom} 
                        onChange={changePrenom} 
                        placeholder="Prénom"/>

                    <input type="text" 
                        className="newInput" 
                        defaultValue={userNom} 
                        onChange={changeNom} 
                        placeholder="Nom"/>

                    <input type="text" 
                        className="newInput" 
                        defaultValue={userMail} 
                        onChange={changeMail} 
                        placeholder="E-mail" />

                    <input type="text" 
                        className="newInput" 
                        defaultValue={userAge} 
                        onChange={changeAge} 
                        placeholder="Age" />

                    <input type="text" 
                        className="newInput" 
                        defaultValue={userMetier} 
                        onChange={changeMetier} 
                        placeholder="Métier" />
                </div>

                <button className="validerBtn" onClick={validerChangeInfos}>Valider</button>
                
            </div>

          : <div className="infos-container"> {/*Si non, tu affiches les infos utilisateurs */}
                <h3>Mon profil :</h3>

                <div className="infos">
                    <div className="p-container">
                        <p>Prénom:</p> <p>{userPrenom}</p>
                    </div>
                    <div className="p-container">
                        <p>nom:</p> <p>{userNom}</p>
                    </div>
                    <div className="p-container">
                        <p>E-mail:</p> <p>{userMail}</p>
                    </div>
                    <div className="p-container">
                        <p>Age:</p> <p>{userAge} ans</p>
                    </div>
                    <div className="p-container">
                        <p>Métier:</p> <p>{userMetier}</p>
                    </div>                      
                </div>             
                <button className="modifierBtn" onClick={changeInfos}>Modifier votre profil</button>
            </div>
        }
        </div>
    );
}

export default Profil;