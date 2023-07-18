import Header from "../models/ModelsHeader";
import Footer from "../models/ModelsFooter";
import Menu from "../layout/Menu";

function Home(){
 return(
    <div>
        <Header/>
        <Menu/>
        <h1>Home</h1>
        <Footer/>
    </div>)
}
export default Home