import axios from "axios";
import React, { useEffect, useState } from "react";
import "../assets/StyleListaNoticias.css";

export default function ListaDeNoticias() {
  const baseUrl = "http://localhost:8080/news-live/news";
  const urlDelete = "http://localhost:8080/news-live/delete-news";

  const [noticias, setNews] = useState([]);

  useEffect(() => {
    cargarNews();
  }, []);

  function formatDate(dateString) {
    const options = {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };

    const formattedDate = new Date(dateString).toLocaleString(
      undefined,
      options
    );

    // Obtener la cadena de formato "dd-mm-aaaa xx:00m"
    const [datePart, timePart] = formattedDate.split(", ");
    const [month, day, year] = datePart.split("/");
    const [time, period] = timePart.split(" ");
    const formattedResult = `${day}-${month}-${year} ${time}${period}`;

    return formattedResult;
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

  const eliminarNoticia = async (id) => {
    await axios.delete(`${urlDelete}/${id}`);
    cargarNews();
  }



  return (
    <>
      <table className="table table-striped">
        <thead className="text-center">
          <tr>
            <th scope="col" className="table-dark">
              ID
            </th>
            <th scope="col" className="table-dark">
              Noticias cargadas
            </th>
            <th scope="col" className="table-dark">
              Fecha de creación
            </th>
            <th scope="col" className="table-dark">
              Acciones
            </th>
          </tr>
        </thead>
        <tbody>
          {noticias.map((noticia, indice) => (
            <tr className="table-info" key={indice}>
              <td className="text-center">
                <b>{noticia.id}</b>
              </td>
              <td>{noticia.titulo}</td>
              <td className="text-center">{formatDate(noticia.fechaPublicacion)}</td>
              <td className="text-center">
                <div>
                  <a
                    className="btn btn-primary btn-sm me-3"
                    role="button"
                    
                  >
                    Editar
                  </a>
                  <button
                    className="btn btn-danger btn-sm"
                    role="button"
                    onClick={() => eliminarNoticia(noticia.id)}
                  >
                    Borrar
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
