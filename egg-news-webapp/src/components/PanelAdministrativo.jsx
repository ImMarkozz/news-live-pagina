import React from "react";
import "../assets/StyleFormAdmin.css";

export default function () {
  return (
    <div className="formulario" media="(max-width:800px)">
        
    <div className="form-container formulario-center">
      <h1 align="center">Crear noticia</h1>
      <form className="form">
        
        <div className="form-group">
          <label htmlFor="titulo">Titulo de la noticia</label>
          <input required="enable" name="titulo" id="titulo" type="text"/>
        </div>
        <div className="form-group">
          <label htmlFor="categoria">Categoria de la noticia</label>
          <input required="enable" name="categoria" id="categoria" type="text"/>
          <datalist id="categoria">
            <option value="Economia"></option>
            <option value="Mundo"></option>
            <option value="Locales"></option>
            <option value="Deportes"></option>
          </datalist>
        </div>
        <div className="form-group">
          <label htmlFor="imagen">URL imagen de la noticia</label>
          <input required="enable" name="imagen-url" id="imagen-url" type="text"/>
        </div>
        <div className="form-group">
          <label htmlFor="noticia">Noticia</label>
          <textarea required="enable" cols="50" rows="10" id="textarea" name="textarea"></textarea>
        </div>
        <button type="submit" className="form-submit-btn">Subir noticia</button>
      </form>
    </div>
    </div>
  );
}
