package com.CabAplication.Rupesh.dao;


import com.CabAplication.Rupesh.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin()
public interface UserRepository extends JpaRepository<User, Integer> {
}
