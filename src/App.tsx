import Student from "./components/Student";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <Header title="React.js + TypeScript com Vite" />
      <Student name="Mateus Mangueira" age={28} city="CG" />
      <Footer />
    </div>
  );
}


