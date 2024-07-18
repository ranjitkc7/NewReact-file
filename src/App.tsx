
import JokeGenerator from "./Components/JokeGenerator";

function App() {
  return (
    <>
      <div
        style={{
          display: "flex",
          gap: "2rem",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "lightblue",
          width: "100%"
        }}
      >
        {/* <Card
          Image="pic.jpg"
          Name="Ranjit K.C."
          Email="ranjitkc292@gmail.com"
          Address="Syangja"
          Phone={9826499392}
          Gender="Male"
          Hobby="Singing"
        />
        <Card
          Image="boyImg.png"
          Name="Ramesh K.C."
          Email="rameshc292@gmail.com"
          Address="kaski"
          Phone={9826445678}
          Gender="Male"
          Hobby="Playing"
          /> */}
          <div>
            <JokeGenerator />
          </div>
      </div>
    </>
  );
}

export default App;
