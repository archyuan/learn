package com.example.demo.entity;

public class BookInfoWithBorrowed {

    private String bookid;
    private String bookname;
    private String bookauthor;
    private String bookpublish;
    private Integer bookstate;


    public String getBookid() {
        return bookid;
    }

    public void setBookid(String bookid) {
        this.bookid = bookid;
    }

    public String getBookname() {
        return bookname;
    }

    public void setBookname(String bookname) {
        this.bookname = bookname;
    }

    public String getBookauthor() {
        return bookauthor;
    }

    public void setBookauthor(String bookauthor) {
        this.bookauthor = bookauthor;
    }

    public String getBookpublish() {
        return bookpublish;
    }

    public void setBookpublish(String bookpublish) {
        this.bookpublish = bookpublish;
    }

    public Integer getBookstate() {
        return bookstate;
    }

    public void setBookstate(Integer bookstate) {
        this.bookstate = bookstate;
    }

    @Override
    public String toString() {
        return "{bookid:"+bookid+",bookname:"+bookname
                +",bookauthor:"+bookauthor+",bookpublish"+bookpublish
                +",bookstate"+bookstate;
    }
}
