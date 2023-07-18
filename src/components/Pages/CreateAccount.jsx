import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
// import "../style/homepage.css";
import "bootstrap/dist/css/bootstrap.min.css";

function CreateAccount() {


    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confpassword, setConfPassword] = useState("");
    const [username, setUsername] = useState("");
    const [date_of_birth, setDate_Of_Birth] = useState("");
    const [picture, setPicture] = useState("");
    const [messageErreur, setMessageErreur] = useState('');


    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();


        const ageMinimum = 18;
        const dateNaissance = parseISO(date_of_birth);
        const age = differenceInYears(new Date(), dateNaissance);

        if (age < ageMinimum) {
            setMessageErreur("Vous devez avoir au moins 18 ans.");
            return;
        }

        let options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                password: password,
                firstname: firstName,
                lastname: lastName,
            }),
        };
        console.log("option", options);

        await fetch(
            `http://127.0.0.1:8000/api/login`,// EN ATTENTE DE L'API DU GAME
            options
        )
            .then((response) => response.json())
            .then((data) => {
                if (data.success) {
                    navigate("/login");
                } else {
                    swal(data.message);
                }
            });
    };


    return (
        <div className="buttonsHome">


            <form method="post">
                <label className="labelCreate" htmlFor="">
                    First Name
                </label>
                <input
                    type="text"
                    className="inputFirstNameCreate"
                    id="Nom"
                    name="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />

                <label className="labelCreate" htmlFor="">
                    Last Name
                </label>
                <input
                    type="text"
                    className="inputLastNameCreate"
                    id="Prenom"
                    name="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />

                <label className="labelCreate" htmlFor="">
                    Pseudo
                </label>
                <input
                    type="text"
                    className="inputPseudoCreate"
                    id="pseudo"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <label className="labelCreate" htmlFor="">
                    Date de Naissance
                </label>
                <input
                    type="date"
                    className="inputDateCreate"
                    id="date"
                    name="date_of_birth"
                    value={date_of_birth}
                    onChange={(e) => setDate_Of_Birth(e.target.value)}
                />

                <label className="labelCreate" htmlFor="">
                    Photos de Profils
                </label>
                <input
                    type="file"
                    id="image"
                    name="picture"
                    value={picture}
                    onChange={(e) => setPicture(e.target.value)}
                />
                <label className="labelCreate" htmlFor="">
                    E-mail
                </label>
                <input
                    type="email"
                    className="inputEmailCreate"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label className="labelCreate" htmlFor="">
                    Password
                </label>
                <input
                    type="password"
                    className="inputPasswordCreate"
                    id="Password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <label className="labelCreate" htmlFor="">
                    Confimation du Password
                </label>
                <input
                    type="password"
                    className="inputConfPasswordCreate"
                    id="ConfPassword"
                    name="confpassword"
                    value={confpassword}
                    onChange={(e) => setConfPassword(e.target.value)}
                />

                <div className="divButtonCreate">
                    {messageErreur && <p>{messageErreur}</p>}
                    <button type="submit" onClick={handleSubmit}>
                        Create Account
                    </button>
                </div>
            </form>


        </div>
    );
}

export default CreateAccount;
