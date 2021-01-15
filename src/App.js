import "./App.css";
import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import ReactLoading from "react-loading";

function App() {
  const [author, setAuthor] = useState("Richard Stallman");
  const [quote, setQuote] = useState(
    "With software there are only two possibilites: either the users control the programme or the programme controls the users. If the programme controls the users, and the developer controls the programme, then the programme is an instrument of unjust power."
  );

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://quotes.stormconsultancy.co.uk/random.json`)
      .then((res) => {
        if (res.data.id !== 32) {
          setAuthor(res.data.author);
          setQuote(res.data.quote);
        }
      })
      .then(() => setLoading(false));
  }, []);

  return (
    <div className="App">
      <header className="App-header ">
        {loading === true && (
          <Fragment>
            <ReactLoading
              type="bars"
              color="#bd93f9"
              height={230}
              width={170}
            />
          </Fragment>
        )}
        {loading === false && (
          <div>
            <p className="px-5 quote-text">{quote}</p>
            <p className="author-text">- {author}</p>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
