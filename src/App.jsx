import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import { Link, Route, Routes } from "react-router-dom";
import City from "./components/City";
import NotFound from "./components/NotFound";

function App() {
  const [testVar, setTestVar] = useState(0);
  return (
    <div>
      <nav>
        <Link to="/">Startseite</Link>
        <Link to="/about">Über uns</Link>
        <Link to="/contact">Kontakt</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/city/:city" element={<City />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <div>
        <p>{testVar}</p>
        <button
          onClick={() => {
            setTestVar(testVar + 1);
            console.log("Button clicked, testVar is now:", testVar + 1);
          }}
        >
          Add +1
        </button>
      </div>
    </div>
  );
}

export default App;
