
import { Route, Routes, useLocation } from "react-router-dom";
import Nav from "./components/Nav";
import {
  Hero,
  Footer,
  CustomerReview,
  PopularProduct,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
 
} from "./section";
import Home from "./modules/Home";

const App = () => {

  return (
  
    <main className="relative min-h-screen flex flex-col">
      <Nav />
      <Routes>
        <Route path="/" element={<Home  />} />
        <Route path="/home" element={<Home  />} />
        <Route path="/about-us" element={<h1>About</h1>} />
      </Routes>
      <section className="bg-black padding-x padding-t pb-8 mt-auto ">
        <Footer />
      </section>

    </main>
  
);
}



export default App;
