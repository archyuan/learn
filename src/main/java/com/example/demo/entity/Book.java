package com.example.demo.entity;

import java.util.Date;

public class Book {
    private Integer key;
    private String bookid;
    private String bookname;
    private String bookauthor;
    private String bookpublish;
    private String putdate;
    private Integer booknumber;

    public int getKey() {
        return key;
    }

    public void setKey(int key) {
        this.key = key;
    }

    private String booktag;
    private String bookcontent;

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

    public String getPutdate() {
        return putdate;
    }

    public void setPutdate(String putdate) {
        this.putdate = putdate;
    }

    public Integer getBooknumber() {
        return booknumber;
    }

    public void setBooknumber(Integer booknumber) {
        this.booknumber = booknumber;
    }

    public String getBooktag() {
        return booktag;
    }

    public void setBooktag(String booktag) {
        this.booktag = booktag;
    }

    public String getBookcontent() {
        return bookcontent;
    }

    public void setBookcontent(String bookcontent) {
        this.bookcontent = bookcontent;
    }

    @Override
    public String toString() {
        return "{key:" + key + ",bookid:" + bookid + ",bookname:" + bookname + ",bookauthor:" + bookauthor + ",bookpublish:" + bookpublish
                + ",putdate:" + putdate + ",booknumber:" + booknumber + ",booktag:" + booktag + ",bookcontent:" + bookcontent + "}";
    }
}
