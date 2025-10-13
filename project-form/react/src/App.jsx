import { Routes, Route } from "react-router-dom";
import FormPage from "./pages/Form";       
import Richiesta from "./pages/Richiesta"; 
import Conferma from "./pages/Conferma";   

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<FormPage />} />
      <Route path="/richiesta" element={<Richiesta />} />
      <Route path="/conferma" element={<Conferma />} />
    </Routes>
  );
};

export default App;
