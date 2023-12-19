import "./index.css";
import Card from "./components/Card";
import { useState } from "react";

function App() {
  const [status, setStatus] = useState({
    cardOne: false,
    cardTwo: false,
    cardThree: true,
    cardFour: false,
    cardFive: false,
  });

  console.log(status);

  return (
    <div className="App">
      <div className="container">
        <Card
          number={1}
          text="The only person you are destined to become is the person you decide to be.” - Ralph Waldo Emerson"
          status={status.cardOne}
          setStatus={setStatus}
          onClick={() =>
            setStatus({
              cardOne: true,
              cardTwo: false,
              cardThree: false,
              cardFour: false,
              cardFive: false,
            })
          }
        />
        <Card
          number={2}
          text="“Your life does not get better by chance, it gets better by change.” - Jim Rohn"
          status={status.cardTwo}
          setStatus={setStatus}
          onClick={() =>
            setStatus({
              cardOne: false,
              cardTwo: true,
              cardThree: false,
              cardFour: false,
              cardFive: false,
            })
          }
        />
        <Card
          number={3}
          text="“Your time is limited, don’t waste it living someone else’s life.” - Steve Jobs"
          status={status.cardThree}
          setStatus={setStatus}
          onClick={() =>
            setStatus({
              cardOne: false,
              cardTwo: false,
              cardThree: true,
              cardFour: false,
              cardFive: false,
            })
          }
        />
        <Card
          number={4}
          text="“Don’t watch the clock; do what it does. Keep going.” - Sam Levenson"
          status={status.cardFour}
          setStatus={setStatus}
          onClick={() =>
            setStatus({
              cardOne: false,
              cardTwo: false,
              cardThree: false,
              cardFour: true,
              cardFive: false,
            })
          }
        />
        <Card
          number={5}
          text="“Success usually comes to those who are too busy to be looking for it.” - Henry David Thoreau"
          status={status.cardFive}
          setStatus={setStatus}
          onClick={() =>
            setStatus({
              cardOne: false,
              cardTwo: false,
              cardThree: false,
              cardFour: false,
              cardFive: true,
            })
          }
        />
      </div>
    </div>
  );
}

export default App;
