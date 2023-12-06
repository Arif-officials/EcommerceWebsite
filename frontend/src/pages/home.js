import { css } from "@emotion/react";
import Login from "../components/LoginSignup/login";
import Header from "../components/header/header";
import Navbar from "../components/navbar/navbar";
import"./home.css"
import him from "../assets/images/him.png"
import Hometext from "../components/HomeText/hometext";
function Home(){
    return(
        <div>
        <Header/>
    <Navbar/>
    <Hometext/>
    </div>
   

    
    );
}

export default Home;