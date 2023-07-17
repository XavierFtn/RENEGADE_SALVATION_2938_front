import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { useEffect, useRef } from "react";
import Disconnect from "../user/Disconnect";

function Menu() {
    const create = useRef()
    const connect = useRef()
    const profil = useRef()
    const vosposts = useRef()
    const vosposts2 = useRef()
    const disconnect = useRef()
    const token = JSON.parse(localStorage.getItem("token"));
    const user = JSON.parse(localStorage.getItem("user"));

    function Display() {
        if (token != null) {
            create.current.style.display = "none";
            connect.current.style.display = "none";
            profil.current.style.display = "block";
            disconnect.current.style.display = "block";
            vosposts.current.style.display = "block";
            vosposts2.current.style.display = "none";
        }
        else {
            create.current.style.display = "block";
            connect.current.style.display = "block";
            profil.current.style.display = "none";
            disconnect.current.style.display = "none";
            vosposts.current.style.display = "none";
            vosposts2.current.style.display = "block";


        }
    }
    useEffect(() => { Display() },)
    return (
        <div className="col  colorWhite  bkgColorBlack imgBkg  ">
            <div className="row m-3 align  borderOrange bkgColorGrey ">
                <div className="col align"><img src="./src/assets/icon/profil.png" style={{ width: "78px" }} /></div>
                <div className="col user">
                    <div className="row roboto20"><p>Bienvenue</p></div>
                    <div className="row roboto20">{user}</div>
                </div>

            </div>

            <nav >
                <div className="row m-3 align roboto36 borderb">
                    <p className='align'>Menu</p>
                </div>
                <div className="row mt-5">
                    <Link className="align a " to="/"><Button className="w-7" variant="warning"><img src="./src/assets/icon/home.png" style={{ width: "30px", marginRight: "30px" }} />Home</Button>{' '}</Link>
                </div>
                <div className="row mt-5 " >
                    <Link className="align a" to="/Create"><Button ref={create} variant="primary"><img src="./src/assets/icon/note.png" style={{ width: "30px", marginRight: "30px" }} />Creer compte</Button>{' '}</Link>
                    <Link className="align a" to="/Profil"><Button ref={profil} variant="primary"><img src="./src/assets/icon/man.png" style={{ width: "30px", marginRight: "30px" }} />Profil</Button>{' '}</Link>

                </div>
                <div className="row mt-5 ">
                    <Link className="align a" to="/Post"><Button variant="warning"><img src="./src/assets/icon/terre.png" style={{ width: "30px", marginRight: "30px" }} />Post&apos;Book</Button>{' '}</Link>
                </div>

                <div className="row mt-5 ">
                    <Link className="align a" to="/ConnectPost"><Button ref={vosposts} c variant="warning"><img src="./src/assets/icon/comm.png" style={{ width: "30px", marginRight: "30px" }} />Vos Blhooks</Button>{' '}</Link>
                    <Link className="align a" to="/"><Button ref={vosposts2} variant="warning"><img src="./src/assets/icon/robot.png" style={{ width: "30px", marginRight: "30px" }} />Lorem Ipsum</Button>{' '}</Link>

                </div>
                <div className="row mt-5 ">
                    <Link className="align a" to="/Connect"><Button ref={connect} variant="success"><img src="./src/assets/icon/log.png" style={{ width: "30px", marginRight: "30px" }} />Connexion</Button>{' '}</Link>
                    <Link className="align a" to="/Disconnect"><Button ref={disconnect} onClick={Disconnect} variant="danger"><img src="./src/assets/icon/delog.png" style={{ width: "30px", marginRight: "30px" }} />Déconnexion</Button>{' '}</Link>

                </div>


                <div className="row mt-5 ">
                    <Link className="align a" to="/Contact"><Button variant="info">Nous contacter</Button>{' '}</Link>
                </div>

            </nav>

        </div>
    )
}

export default Menu