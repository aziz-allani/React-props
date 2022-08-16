import "./App.css";
import Profile from "./Profile/Profile";

import Image from "./aziz.jpg";

function App() {
  return (
    <div className="appp">
      <Profile
        imgSrc={Image}
        fullName="Aziz Allani"
        bio="****************************************** "
        profession="Student"
        Affiche={() => alert("Aziz Allani")}
      >
        <img src={Profile.imgSrc} alt="imaaaaaaaaaage" />
      </Profile>
    </div>
  );
}

export default App;
