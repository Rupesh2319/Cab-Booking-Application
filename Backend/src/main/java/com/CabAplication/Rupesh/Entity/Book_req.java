package com.CabAplication.Rupesh.Entity;

import jakarta.persistence.*;

@Entity
@Table(name="Book_req")
public class Book_req {
    @Id
    @Column(name="id")
    private int id;


    @Column(name="user_id")
   private int user_id;

//    @OneToOne(mappedBy = "booking_id")
//    private Admin admin;


    @Column(name="starting_point")
    private String starting_point;

    @Column(name="ending_point")
    private String ending_point;

    @Column(name="book_date")
    private String book_date;

    @Column(name="cab_type")
    private String cab_type;

    @Column(name="booking_status")
    private String booking_status;

    public Book_req() {
    }



    public Book_req(int id, int user_id, String starting_point, String ending_point, String book_date, String cab_type, String booking_status) {
        this.id = id;
        this.user_id = user_id;
        this.starting_point = starting_point;
        this.ending_point = ending_point;
        this.book_date = book_date;
        this.cab_type = cab_type;
        this.booking_status = booking_status;
    }

    public String getBooking_status() {
        return booking_status;
    }

    @Override
    public String toString() {
        return "Book_req{" +
                "id=" + id +
                ", user_id=" + user_id +
                ", starting_point='" + starting_point + '\'' +
                ", ending_point='" + ending_point + '\'' +
                ", book_date='" + book_date + '\'' +
                ", cab_type='" + cab_type + '\'' +
                ", booking_status='" + booking_status + '\'' +
                '}';
    }

    public void setBooking_status(String booking_status) {
        this.booking_status = booking_status;
    }

    public String getCab_type() {
        return cab_type;
    }

    public void setCab_type(String cab_type) {
        this.cab_type = cab_type;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getUser_id() {
        return user_id;
    }

    public void setUser_id(int user_id) {
        this.user_id = user_id;
    }

    public String getStarting_point() {
        return starting_point;
    }

    public void setStarting_point(String starting_point) {
        this.starting_point = starting_point;
    }

    public String getEnding_point() {
        return ending_point;
    }

    public void setEnding_point(String ending_point) {
        this.ending_point = ending_point;
    }

    public String getBook_date() {
        return book_date;
    }

    public void setBook_date(String book_date) {
        this.book_date = book_date;
    }

}
