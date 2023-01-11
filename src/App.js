import { Landing, Navbar, About } from "./components/index";

function App() {
  return (
    <div className="selection:bg-yellow-200 selection:text-black">
      <Navbar />
      <Landing />
      <About />
    </div>
  );
}

export default App;