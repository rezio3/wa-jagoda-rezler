import "./App.css";

import Header from "./components/elements/Header";
import Footer from "./components/footer/Footer";

import Navigation from "./components/navigation/Navigation";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
