import { useNavigate } from "react-router";

function Disconnect() {

    const navigate = useNavigate();

    localStorage.removeItem("user")
    localStorage.removeItem("token");
    localStorage.removeItem("planet");
    
    navigate('/');

}

export default Disconnect