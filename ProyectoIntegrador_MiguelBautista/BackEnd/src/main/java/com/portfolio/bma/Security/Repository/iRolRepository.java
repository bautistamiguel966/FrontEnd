
package com.portfolio.bma.Security.Repository;

import com.portfolio.bma.Security.Entity.Rol;
import com.portfolio.bma.Security.Enums.RolNombre;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface iRolRepository extends JpaRepository<Rol, Integer> {
    Optional<Rol> findByRolNombre(RolNombre rol);
    
}
