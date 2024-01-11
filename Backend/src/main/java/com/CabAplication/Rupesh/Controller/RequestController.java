package com.CabAplication.Rupesh.Controller;


import com.CabAplication.Rupesh.Entity.Book_req;
import com.CabAplication.Rupesh.dao.BooKRepository;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RequestController {

    private  final BooKRepository repository;

    RequestController(BooKRepository repository){
        this.repository = repository;
    }

    @PutMapping("api/book_req/approve/{id}")
    void approveRequest(@PathVariable int id){
         repository.findById(id)
                .map(Book_req -> {
                    Book_req.setBooking_status("Approved");
                    return repository.save(Book_req);
        });
    }

    @PutMapping("api/book_req/reject/{id}")
    void rejectRequest(@PathVariable int id){
        repository.findById(id)
                .map(Book_req -> {
                    Book_req.setBooking_status("Rejected");
                    return repository.save(Book_req);
                });
    }

    @DeleteMapping("api/book_req/{id}")
    void deleteRequest(@PathVariable int id) {
        repository.deleteById(id);
    }


}
