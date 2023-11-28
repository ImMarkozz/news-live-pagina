package com.eggnews.noticias.services;

import java.util.List;
import com.eggnews.noticias.entities.News;

public interface INoticiasService {
    
    public News guardarNoticia(News news);

    public void borrarNoticia(Long id); 

    public News buscarNoticiaPorId(Long id);

    public List<News> mostrarNoticias();

    public News actualizarNoticia(News putnews);
        


}
