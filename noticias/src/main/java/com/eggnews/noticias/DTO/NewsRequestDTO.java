package com.eggnews.noticias.DTO;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class NewsRequestDTO {
    private String titulo;
    private String cuerpo;
    private String imageUrl;
    private String categoria;
    private Date fechaPublicacion;
}
