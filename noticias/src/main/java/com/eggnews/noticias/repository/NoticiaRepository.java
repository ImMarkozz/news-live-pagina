package com.eggnews.noticias.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.eggnews.noticias.entities.News;

@Repository
public interface NoticiaRepository extends JpaRepository<News, Long>{
    
}


