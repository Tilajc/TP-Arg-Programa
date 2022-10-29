package com.portfolio.Tilajc.Service;

import com.portfolio.Tilajc.Entity.Persona;
import com.portfolio.Tilajc.Interface.IPersonaService;
import com.portfolio.Tilajc.Repository.IPersonaRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ImpPersonaService implements IPersonaService {

    @Autowired
    IPersonaRepository ipersonaRepository;

    @Override
    public List<Persona> getPersona() {
        List<Persona> persona = ipersonaRepository.findAll();
        return persona;
    }

    @Override
    public Void savePersona(Persona persona) {
        ipersonaRepository.save(persona);
        return null;
    }

    @Override
    public Void deletePersona(Long id) {
        ipersonaRepository.deleteById(id);
        return null;
    }

    @Override
    public Persona findPersona(Long id) {
        Persona persona = ipersonaRepository.findById(id).orElse(null);
        return persona;
    }

}
