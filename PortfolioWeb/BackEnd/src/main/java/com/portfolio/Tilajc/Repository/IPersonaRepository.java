package com.portfolio.Tilajc.Repository;

import com.portfolio.Tilajc.Entity.Persona;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface IPersonaRepository extends JpaRepository<Persona, Long> {

}
