import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import TechnologiesSection from "./components/TechnologiesSection";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TechnologiesSection />
      </main>
      <ToastContainer
        position="top-right"
        autoClose={2200}
        hideProgressBar
        newestOnTop
      />
    </>
  );
}
