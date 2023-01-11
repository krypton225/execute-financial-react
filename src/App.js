import { Landing, Navbar, About } from "./components/index";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="selection:bg-yellow-200 selection:text-black">
      <Navbar />
      <Landing />
      <About />
      <Testimonials />
    </div>
  );
}

export default App;