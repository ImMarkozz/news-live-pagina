package com.eggnews.noticias.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.eggnews.noticias.DTO.NewsRequestDTO;
import com.eggnews.noticias.entities.News;
import com.eggnews.noticias.services.INoticiasService;

@RestController
@RequestMapping("news-live")
@CrossOrigin(value = "http://localhost:5173")
public class NoticiaController {

    @Autowired
    private INoticiasService noticiasService;

    // http://localhost:8080/news-live/save-news
    @PostMapping("/save-news")
    public News guardarNoticia(@RequestBody NewsRequestDTO newsRequestDTO) {
        News news = new News();
        news.setTitulo(newsRequestDTO.getTitulo());
        news.setCuerpo(newsRequestDTO.getCuerpo());
        news.setImageUrl(newsRequestDTO.getImageUrl());
        news.setCategoria(newsRequestDTO.getCategoria().toUpperCase());

        return noticiasService.guardarNoticia(news);
    }

    // http://localhost:8080/news-live/news
    @GetMapping("/news")
    public List<News> mostrarNoticias() {
        return noticiasService.mostrarNoticias();
    }

    // http://localhost:8080/news-live/delete-news/ID
    @DeleteMapping("/delete-news/{id}")
    public void borrarNoticiaPorId(@PathVariable Long id) {
        noticiasService.borrarNoticia(id);
    }

    // http://localhost:8080/news-live/news/ID
    @GetMapping("/news/{id}")
    public News buscarNoticiaPorId(@PathVariable Long id) {
        return noticiasService.buscarNoticiaPorId(id);
    }

    // http://localhost:8080/news-live/edit-news/ID
    @PutMapping("/edit-news/{id}")
    public News actualizarNoticia(@PathVariable Long id, @RequestBody NewsRequestDTO newsRequestDTO) {
        News noticiaExistente = noticiasService.buscarNoticiaPorId(id);

        if (noticiaExistente != null) {
            noticiaExistente.setTitulo(newsRequestDTO.getTitulo());
            noticiaExistente.setCuerpo(newsRequestDTO.getCuerpo());
            noticiaExistente.setImageUrl(newsRequestDTO.getImageUrl());
            noticiaExistente.setCategoria(newsRequestDTO.getCategoria().toUpperCase());

            return noticiasService.actualizarNoticia(noticiaExistente);
        } else {
            System.out.println("La noticia que intentas actualizar no existe");
            // Manejar el caso en el que la noticia no exista
            return null;
        }
    }

    

}
