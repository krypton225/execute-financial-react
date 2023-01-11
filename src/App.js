import { Landing, Navbar, About, Testimonials } from "./components/index";

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