import { useState, useEffect } from "react";
import "../profil/profil.css"
import { getCurrentUserProfile, updateCurrentUserProfile} from "../../lib/Social-Network-Library";

function Profil() {
    const[userId, setUserId] = useState("");
    const[userPrenom, setUserPrenom] = useState("");
    const[userNom, setUserNom] = useState("");
    const[userMail, setUserMail] = useState ("");
    const[userAge, setUserAge] = useState();
    const[userMetier, setUserMetier] = useState("");

    const[onClickChangeInfos, setChangeInfos] = useState(false)

    const getUserId = async () => {
        let result = await getCurrentUserProfile(); 
        setUserId(result._id);
        setUserPrenom(result.firstname)
        setUserNom(result.lastname)
        setUserMail(result.email)
        setUserAge(result.age)
        setUserMetier(result.occupation)
        console.log(result);
    }

    function changeInfos () {
        if (onClickChangeInfos) {
            setChangeInfos(false)
        } else{
            setChangeInfos(true)
        }
    }
    
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


    const validerChangeInfos = async () => {
        let result = await updateCurrentUserProfile(userPrenom, userNom, userMail, userAge, userMetier)
        setChangeInfos(false)
        
    }


    useEffect(() =>{
        getUserId();
    }, [])


    return (  

        <div className="profil-container">
            <img src="" alt=""></img>
            
        { onClickChangeInfos 
          ? <div className="infos-container">
                <input type="text" 
                       className="newPrenom" 
                       defaultValue={userPrenom} 
                       onChange={changePrenom} 
                       placeholder="Prénom"/>

                <input type="text" 
                       className="newNom" 
                       defaultValue={userNom} 
                       onChange={changeNom} 
                       placeholder="Nom"/>

                <input type="text" 
                       className="newMail" 
                       defaultValue={userMail} 
                       onChange={changeMail} 
                       placeholder="E-mail" />

                <input type="text" 
                       className="newAge" 
                       defaultValue={userAge} 
                       onChange={changeAge} 
                       placeholder="Age" />

                <input type="text" 
                       className="newMetier" 
                       defaultValue={userMetier} 
                       onChange={changeMetier} 
                       placeholder="Métier" />

                <button onClick={validerChangeInfos}>Valider</button>
                
            </div>

          : <div className="infos-container">
                <p>Prénom = {userPrenom}</p>
                <p>nom = {userNom}</p>
                <p>E-mail = {userMail}</p>
                <p>Age = {userAge} ans</p>
                <p>Métier = {userMetier}</p>

                <button onClick={changeInfos}>Modifier votre profil</button>

            </div>
        }


        </div>
    );
}

export default Profil;