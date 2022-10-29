package com.portfolio.Tilajc.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity

public class Persona {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotNull
    @Size(min = 1,max = 50, message= "Debe tener una longitud entre 1-50 caracteres")
    private String nombre;    
    @NotNull
    @Size(min = 1,max = 30, message= "Debe tener una longitud entre 1-30 caracteres")
    private String apellido;
    @NotNull
    @Size(min = 1,max = 50, message= "Debe tener una longitud entre 1-50 caracteres")
    private String img;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }
    
}