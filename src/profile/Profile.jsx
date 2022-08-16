import Card from "react-bootstrap/Card";
import "../App.css";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";

const Profile = ({ imgSrc, fullName, bio, profession }) => {
  const Affiche = () =>
    alert(`
        Full Name is: ${fullName}
        `);
  return (
    <Card className="profile-card">
      <Card.Img variant="top" src={imgSrc} className="img-circle" />
      <Card.Body>
        <Card.Title className="name-style">{fullName}</Card.Title>
        <Card.Text className="bio">{bio}</Card.Text>
        <Card.Text className="profession">{profession}</Card.Text>
        <Button variant="primary" className="botn-style" onClick={Affiche}>
          Go somewhere
        </Button>
      </Card.Body>
    </Card>
  );
};

Profile.defaultProps = {
  imgSrc:
    "https://i0.wp.com/researchictafrica.net/wp/wp-content/uploads/2016/10/default-profile-pic.jpg?ssl=1",
  fullName: "zzzzzzzzzzzzzzzzzz",
  bio: "lore ipsum dolor sit amet, consectetur adipiscing elit, sed diam ",
  profession: "Full Stack Developer",
};

Profile.propTypes = {
  imgSrc: PropTypes.string,
  fullName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
  Affiche: PropTypes.func,
};

export default Profile;
