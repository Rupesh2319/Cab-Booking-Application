package com.CabAplication.Rupesh.dao;

import com.CabAplication.Rupesh.Entity.Admin;
import org.hibernate.metamodel.internal.AbstractDynamicMapInstantiator;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdminRepository extends JpaRepository<Admin , Integer> {
}
