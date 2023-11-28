import React, { useEffect, useState } from "react";
import "../assets/StylePormi.css";
import axios from "axios";

export default function CardNoticiascopy() {
  const baseURL = "http://localhost:8080/news-live/news";

  const [noticias, setNews] = useState([]);

  useEffect(() => {
    cargarNews();
  }, []);

  // Metodo asincrono que consume la API, alternativa para la fetch
  const cargarNews = async () => {
    try {
      const resultado = await axios.get(baseURL);
      console.log("Resultado de cargar empleado");
      console.log(resultado.data);
      setNews(resultado.data);
    } catch (error) {
      console.error("Error al cargar noticias:", error);
    }
  };

  return (
    <>
      {noticias.map((noticia, indice) => (
        <main key={indice}>
          <div class="container">
            <div class="row">
              <div class="col-md-4">
                <div class="custom-card">
                  <div class="category-card">
                    <span class="card__span">{noticia.categoria}</span>
                  </div>
                  <img
                    src={noticia.imageUrl}
                    alt="Imagen de noticia"
                    class="card-img-top"
                  />
                  <div class="card-body">
                    <h5 class="card-title">{noticia.titulo}</h5>
                    <p class="card-text">{noticia.cuerpo}</p>
                    <div>
                      <mark className="fecha-publicacion">
                        <p>Publicada en {new Date().getFullYear()}</p>
                      </mark>
                      <button className="boton">Leer mas </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      ))}
    </>
  );
}
