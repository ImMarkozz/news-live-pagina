import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CardNoticias from "./components/CardNoticias";
import PanelAdministrativo from "./components/PanelAdministrativo";
import Noticias from "./components/Noticias";
import DetallarNoticias from "./components/DetallarNoticias";
import ListaDeNoticias from "./components/ListaDeNoticias";


function App() {
  return (
    <div className="app">
    <BrowserRouter>
      <Header/>
        <Routes>
        <Route path="/home" element={<CardNoticias/>} />
        <Route path="/home/news" element={<Noticias/>} />
        <Route path="/home/panel-admin/crear-noticia" element={<PanelAdministrativo/>} />
        <Route path="/home/panel-admin/list-news" element={<ListaDeNoticias/>} />
        <Route path="/home/detallar-noticia" element={<DetallarNoticias/>} />
        </Routes>
      <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
