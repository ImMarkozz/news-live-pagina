import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CardNoticias from "./components/CardNoticias";
import PanelAdministrativo from "./components/PanelAdministrativo";
import Noticias from "./components/Noticias";
import EliminarNoticia from "./components/EliminarNoticia";
import CardNoticiascopy from "./components/CardNoticiascopy";
import DetallarNoticias from "./components/DetallarNoticias";




function App() {
  return (
    <div className="app">
    <BrowserRouter>
      <Header/>
        <Routes>
        <Route path="/home" element={<CardNoticias/>} />
        <Route path="/news" element={<Noticias/>} />
        <Route path="/panel-admin" element={<PanelAdministrativo/>} />
        <Route path="/panel-admin/delete-news" element={<EliminarNoticia/>} />
        <Route path="/home/detallar-noticia" element={<DetallarNoticias/>} />
        </Routes>
      <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
