import "../App.css";

interface CardProps {
  Image: any;
  Name: string;
  Email: string;
  Address: string;
  Phone: number;
  Gender: string;
  Hobby: string;
}

const Card = ({ Image, Name, Email, Address, Phone, Gender, Hobby }: CardProps) => {
  return (
    <div className="Main-container">
      <h1>Card Content of My Profile</h1>
      <div>
        <img
          src={Image}
          alt="Error"
          style={{
            width: "130px",
            height: "130px",
            borderRadius: "50%",
            objectFit: "cover",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "auto",
          }}
        />
      </div>
      <div className="myinfo" style={
        {
          fontSize: "18px",
        }
      }>
        <div>Name: {Name}</div>
        <div>Email: {Email}</div>
        <div>Address: {Address}</div>
        <div>Phone No: {Phone}</div>
        <div>Gender: {Gender}</div>
        <div>Hobbies: {Hobby}</div>
      </div>
    </div>
  );
};

export default Card;
