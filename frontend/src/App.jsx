import "./App.css";
import Home from "../pages/home/Home";
import Footer from "../components/Footer";

function App() {
  return (
    <>
      <div>
        <Footer className="hover:bg-black text-white" />
        <Home />
        <h2 className="bg-slate-600 text-cyan-300">TESTEST</h2>
        <h2 className="bg-gray-900"> ANOTHER TEST</h2>
        <h2 className="bg-red-600"> LALALALLALALAL</h2>
        <h2 className="bg-lime-500">SALEM</h2>
        <h2 className=" bg-yellow-400 font-bold">FINALLY?</h2>
      </div>
    </>
  );
}

export default App;
