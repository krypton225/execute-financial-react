import { Landing, Navbar, About, Testimonials, Demo, Footer } from "./components/index";

function App() {
  return (
    <div className="selection:bg-yellow-200 selection:text-black">
      <Navbar />
      <Landing />
      <About />
      <Testimonials />
      <Demo />
      <Footer />
    </div>
  );
}

export default App;