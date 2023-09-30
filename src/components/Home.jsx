import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Cards from "./Cards";




const Home = () => {


  const cards = useLoaderData();
  console.log(cards)

    
    return (
        <div>
          <Banner></Banner>
          <Cards cards={cards}></Cards>
        </div>
    );
};

export default Home;