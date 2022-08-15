import "./App.css";
import Profile from "./profile/Profile";
import Image from "./aziz.jpg";

function App() {
  return (
    <div>
      <Profile
        imgSrc={Image}
        fullName="Aziz Allani"
        bio="****************************************** "
        profession="Full Stack Developer"
        Affiche={() => alert("Aziz Allani")}
      />
    </div>
  );
}

export default App;
