import "./hometext.css"
import him from "../../assets/images/him.png";
import her from "../../assets/images/her.png";
function Hometext() {
  return (
    <div className="container">
      <div className="hometext">
        <h2>
        Just dropped & never seen before
        </h2>
        <h1>Designed specially for you</h1>
      </div>
    <div className="home-img">
      <img  src={her}></img>
      <img className="him-img" src={him}></img>
    </div>
    </div>
  );
}
export default Hometext;
