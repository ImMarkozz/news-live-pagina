import React from "react";
import "../assets/StyleFormAdmin.css";
import 'react-datepicker/dist/react-datepicker.css';

export default function () {
  return (
    <div>
        <div className="container mt-5 container-admin">
      <form className="card-personalizado body-card">
        <h3 align="center">Crear noticia</h3>
        <div className="mb-3">
          <label htmlFor="titulo" className="form-label">Título de la noticia</label>
          <input type="text" className="form-control" id="titulo"/>
        </div>
        <div className="mb-3">
          <label htmlFor="categoria" className="form-label">Categoría</label>
          <select className="form-select" id="categoria">
            <option value="Deportes">Deportes</option>
            <option value="Internacional">Internacional</option>
            <option value="Locales">Locales</option>
            <option value="Sucesos">Sucesos</option>
            <option value="UltimaHora">Ultima Hora</option>
            <option value="Tecnologia">Tecnologia</option>
            <option value="Ciencias">Ciencias</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="imagen" className="form-label">Subir imagen</label>
          <input type="file" className="form-control" id="imagen"/>
        </div>
        <div className="mb-3">
          <label htmlFor="contenido" className="form-label">Contenido de la noticia</label>
          <textarea className="form-control" id="contenido" rows="4"></textarea>
        </div>
        <button type="submit" className="boton">Guardar noticia</button>
      </form>
    </div>
    </div>
  );
}
