import "./App.css";
import axios from "axios";
import { Box, styled } from "@mui/material";

//components
import Header from "./Components/Header";
import InfoHeader from "./Components/InfoHeader";
import Articals from "./Components/Articals";
import Footer from "./Components/Footer";
import { useState, useEffect } from "react";

const Container = styled(Box)(({ theme }) => ({
  width: "60%",
  margin: "40px auto 0 auto",

  [theme.breakpoints.down("md")]: {
    width: "75%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "85%",
  },
}));

const Button = styled("button")({
  cursor: "pointer",
  backgrounColor: "white",
  border: "none",
  boxShadow:
    "0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)",
  padding: "7px 25px",
  fontSize: "13px",
  margin: "10px -60px",
  position: "relative",
  top: "50%",
  left: "50%",
});

function App() {
  const [category, setCategory] = useState("general");
  const [newsArray, setNewsArray] = useState([]);
  const [newsResults, setNewsResults] = useState();
  const [load, setLoad] = useState(10);

  useEffect(() => {
    dailyNews(); // eslint-disable-next-line
  }, [newsResults, category, load]);

  const dailyNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${process.env.REACT_APP_API_KEY}&pageSize=${load}`;
    try {
      const news = await axios.get(url);
      setNewsArray(news.data.articles);
      setNewsResults(news.data.totalResults);
    } catch (err) {
      console.log("error while calling the api", err);
    }

    //get news also retiuen a promise so make it async
  };

  return (
    <div>
      <Header setCategory={setCategory} />
      <Container>
        <InfoHeader />
        <Articals newsArray={newsArray} />
      </Container>
      {load <= newsResults && (
        <Button onClick={() => setLoad(load + 10)}>Load more</Button>
      )}

      <Footer />
    </div>
  );
}

export default App;
