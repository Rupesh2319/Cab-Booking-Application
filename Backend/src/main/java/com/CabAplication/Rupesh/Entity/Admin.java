package com.CabAplication.Rupesh.Entity;

import jakarta.persistence.*;

@Entity
@Table(name="admin")
public class Admin {
    @Column(name="id")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

//    @OneToOne
//    @JoinColumn(name="userId" , nullable=false)
//    private User userId;
//
//    @OneToOne
//    @JoinColumn(name="booking_id")
//    private Book_req booking_id;

     @Column(name="userId")
    private int userId;

     @Column(name="booking_id")
    private int booking_id;


    public Admin(int id, int userId, int booking_id) {
        this.id = id;
        this.userId = userId;
        this.booking_id = booking_id;
    }

    public Admin() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public int getBooking_id() {
        return booking_id;
    }

    public void setBooking_id(int booking_id) {
        this.booking_id = booking_id;
    }

    @Override
    public String toString() {
        return "Admin{" +
                "id=" + id +
                ", userId=" + userId +
                ", booking_id=" + booking_id +
                '}';
    }
}
