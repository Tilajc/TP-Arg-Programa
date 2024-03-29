package com.portfolio.Tilajc.Service;

import com.portfolio.Tilajc.Entity.HyS;
import com.portfolio.Tilajc.Repository.RHyS;
import java.util.List;
import java.util.Optional;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Transactional
@Service
public class SHyS {

    @Autowired
    RHyS rhys;

    public List<HyS> list() {
        return rhys.findAll();
    }

    public Optional<HyS> getOne(int id) {
        return rhys.findById(id);
    }

    public Optional<HyS> getByNombre(String nombre) {
        return rhys.findByNombre(nombre);
    }

    public void save(HyS skill) {
        rhys.save(skill);
    }

    public void delete(int id) {
        rhys.deleteById(id);
    }

    public boolean existsById(int id) {
        return rhys.existsById(id);
    }

    public boolean existsByNombre(String nombre) {
        return rhys.existsByNombre(nombre);
    }
}
