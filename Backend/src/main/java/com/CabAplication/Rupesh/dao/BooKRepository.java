package com.CabAplication.Rupesh.dao;

import com.CabAplication.Rupesh.Entity.Book_req;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin()
public interface BooKRepository extends JpaRepository<Book_req , Integer> {
}
