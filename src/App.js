import { Landing, Navbar } from "./components/index";

function App() {
  return (
    <div className="selection:bg-yellow-200 selection:text-black">
      <Navbar />
      <Landing />
    </div>
  );
}

export default App;