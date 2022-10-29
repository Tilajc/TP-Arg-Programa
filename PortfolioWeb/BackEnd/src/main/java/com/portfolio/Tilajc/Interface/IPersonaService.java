package com.portfolio.Tilajc.Interface;

import com.portfolio.Tilajc.Entity.Persona;
import java.util.List;

public interface IPersonaService {
    //traer una lsita de personas
    public List<Persona> getPersona();
    
    //Guardar un objeto de tipo persona
    public Void savePersona(Persona persona);
    
    //Eliminar un usuario buscado por ID
    public Void deletePersona(Long id);
    
    //Buscar una persona por ID
    public Persona findPersona(Long id);
}
