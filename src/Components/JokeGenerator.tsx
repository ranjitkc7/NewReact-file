import { useState } from "react";


const JokeGenerator = () => {
    const [jokes, setJokes] = useState({
        joke: "", 
        icon: "",
    });

    const getRandomJoke = async () => {
        const response = await fetch("https://api.chucknorris.io/jokes/random?category=career");
        const joke = await response.json();
        console.log(joke);
        setJokes({
            joke: joke.value,
            icon: joke.icon_url,
        });
    }

  return (
    <div>Random Joke Generator

        <button onClick={getRandomJoke}>Generate</button>

        <div>
           {
            jokes.joke && jokes.joke ? (
                <>
                     <img src={jokes.icon} alt="chuck norris img " />
                     <span>{jokes.joke}</span>
                </>
            ) : (
                <span>No Data to show here</span>
            )
           }
        </div>

    </div>
  )
}

export default JokeGenerator