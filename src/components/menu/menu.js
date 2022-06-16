import "../menu/menu.css"
import {Link, useLocation} from "react-router-dom";


function Menu() {
    let location = useLocation();

    return (  
        <div>


            { location.pathname === "/Actu"
                ?
                    <div className="menu-container">
                        <Link className="titre" to={"/Actu"}>MY Réseau Social</Link>
                        <Link to="/Login">Se déconnecter</Link>

                    </div>
                :
                    <div className="menu-container">
                        <h1 className="titre">MY Réseau Social</h1>
                        <div>
                            <Link to="/Login">Se connecter</Link>
                            <Link to="/Register">Créer un compte</Link>
                        </div>
                    </div>

            }
        </div>
    );
}

export default Menu;