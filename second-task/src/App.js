import Witness from "./Components/witness";
import './/stylesheets/App.css';
// @ts-ignore
import shawnPic from '../src/img/Shawn.png';
// @ts-ignore
import sarahPic from '../src/img/Sarah.png';
// @ts-ignore
import emmaPic from '../src/img/Emma.png';

const shawn = {
  name: "Shawn Wang",
  rank: "Software Engineer at ",
  company: "Amazon",
  description: "It's scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life.",
  img: shawnPic
}
const sarah = {
  name: "Sarah Chima",
  rank: "Software Engineer at ",
  company: "ChatDesk",
  description: "freeCodeCamp was the gateway to my career as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company.",
  img: sarahPic
}
const emma = {
  name: "Emma Bostian",
  rank: "Software Engineer at ",
  company: "Spotify",
  description: "I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify.",
  img: emmaPic
}

function App() {
  return (
    <div className="App">
      <h1>
        Here is what our alumni say about freeCodeCamp:
      </h1>
      <div className="main_container">
        <Witness
          img={shawn.img}
          name={shawn.name}
          rank={shawn.rank}
          company={shawn.company}
          description={shawn.description}
        />
        <Witness
          img={sarah.img}
          name={sarah.name}
          rank={sarah.rank}
          company={sarah.company}
          description={sarah.description}
        />
        <Witness
          img={emma.img}
          name={emma.name}
          rank={emma.rank}
          company={emma.company}
          description={emma.description}
        />
      </div>
    </div>
  );
}

export default App;
