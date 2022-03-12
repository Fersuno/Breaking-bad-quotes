import "./App.css";
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  title: {
    fontSize: 18,
  },
  pos: {
    marginBottom: 12,
  },
});

function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetch("https://breaking-bad-quotes.herokuapp.com/v1/quotes")
      .then((res) => res.json())
      .then((quote) => {
        setQuote(quote[0].quote);
        setAuthor(quote[0].author);
        console.log(quote);
      });
  }, []);

  let newQuote = () => {
    fetch("https://breaking-bad-quotes.herokuapp.com/v1/quotes")
      .then((res) => res.json())
      .then((quote) => {
        setQuote(quote[0].quote);
        setAuthor(quote[0].author);
        console.log(quote);
      });
  };

  const classes = useStyles();

  return (
    <div className="App">
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h2">
            {quote}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            -{author}-
          </Typography>
          <br />
          <CardActions>
            <Button variant="contained" color="primary" onClick={newQuote}>
              New Quote
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
