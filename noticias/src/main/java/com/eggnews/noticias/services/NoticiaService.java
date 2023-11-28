package com.eggnews.noticias.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.eggnews.noticias.entities.News;
import com.eggnews.noticias.repository.NoticiaRepository;

@Service
public class NoticiaService implements INoticiasService {

    @Autowired
    private NoticiaRepository noticiaRepository;

    @Override
    public void borrarNoticia(Long id) {
        noticiaRepository.deleteById(id);

    }

    @Override
    public News buscarNoticiaPorId(Long id) {
        return noticiaRepository.findById(id).orElseThrow();
    }

    @Override
    @Transactional
    public News guardarNoticia(News news) {
        return noticiaRepository.save(news);
    }

    @Override
    public List<News> mostrarNoticias() {
        List<News> listaNoticias = new ArrayList<>();
        listaNoticias = noticiaRepository.findAll();
        return listaNoticias;
    }

    @Override
    @Transactional
    public News actualizarNoticia(News putnews) {

        Long id = putnews.getId();

        // Verificar si la noticia existe
        if (noticiaRepository.existsById(id)) {
            // Obtener la noticia existente
            News noticiaExistente = noticiaRepository.findById(id).orElse(null);

            // Actualizar solo los campos no nulos
            if (noticiaExistente != null) {
                if (putnews.getTitulo() != null) {
                    noticiaExistente.setTitulo(putnews.getTitulo());
                }
                if (putnews.getImageUrl() != null) {
                    noticiaExistente.setImageUrl(putnews.getImageUrl());
                }

                if (putnews.getCuerpo() != null) {
                    noticiaExistente.setCuerpo(putnews.getCuerpo());
                }
                if (putnews.getCategoria() != null) {
                    noticiaExistente.setCategoria(putnews.getCategoria());
                }

                // Actualizar otros campos según sea necesario

                // Guardar la noticia actualizada en la base de datos
                return noticiaRepository.save(noticiaExistente);
            }
        }

        // Manejar el caso en el que la noticia no existe
        return null;

        
    }

}
