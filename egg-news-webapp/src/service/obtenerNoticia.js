export async function obtenerProductos(){
    const urlBase="http://localhost:8080/news-live/news"

      const resultado = await axios.get(urlBase);
      console.log("Resultado: "+resultado.data)
      setNoticias(resultado.data);


      }
