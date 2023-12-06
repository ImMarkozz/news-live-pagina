import React, { useEffect, useState } from "react";
import "../assets/StyleNews.css";
import axios from "axios";
import { Link } from "react-router-dom";

export default function CardNoticiascopy() {
  const baseUrl = "http://localhost:8080/news-live/news";

  const [noticias, setNews] = useState([]);

  useEffect(() => {
    cargarNews();
  }, []);

  function formatDate(dateString) {
    const options = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric', 
      hour: 'numeric', 
      minute: 'numeric', 
      hour12: true 
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  }

  // Metodo asincrono que consume la API, alternativa para la fetch
  const cargarNews = async () => {
    try {
      const resultado = await axios.get(baseUrl);
      console.log("Resultado de cargar empleado");
      console.log(resultado.data);
      setNews(resultado.data);
    } catch (error) {
      console.error("Error al cargar noticias:", error);
    }
  };

  return (
    <div className="container">
      <div className="row">
        {noticias.map((noticia, indice) => (
          <div key={indice} className="col-md-4">
            <div className="custom-card">
              <div className="category-card">
                <span className="card__span">{noticia.categoria}</span>
              </div>
              <img
                src={noticia.imageUrl}
                alt="Imagen de noticia"
                className="card-img-top custom-card-img"
              />
              <div className="card-body">
                <Link to={"/home/detallar-noticia"} className="titulo-linkeado">
                  <h5 className="card-title">{noticia.titulo}</h5>
                </Link>
                <p className="card-text">
                  {noticia.cuerpo.length > 100
                    ? `${noticia.cuerpo.substring(0, 124)}...`
                    : noticia.cuerpo}
                </p>
                <div>
                  <p className="fecha-publicacion">
                    Publicada en {formatDate(noticia.fechaPublicacion)}
                  </p>
                  <Link
                    to={"/home/detallar-noticia"}
                    type="button"
                    className="boton"
                  >
                    Leer más
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
