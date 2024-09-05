import "./App.css";
import Navbar from "./components/Navbar.js";
import Layout from "./hoc/layout.js";
import "./assets/images/face.png";

function App() {
  return (
    <div>
      <Navbar />
      <Layout />
    </div>
  );
}

export default App;
