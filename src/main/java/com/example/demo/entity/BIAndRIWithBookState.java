package com.example.demo.entity;

public class BIAndRIWithBookState {

    private String bookid;
    private int readerid;
    private int bookstate;

    public String getBookid() {
        return bookid;
    }

    public void setBookid(String bookid) {
        this.bookid = bookid;
    }

    public int getReaderid() {
        return readerid;
    }

    public void setReaderid(int readerid) {
        this.readerid = readerid;
    }

    public int getBookstate() {
        return bookstate;
    }

    public void setBookstate(int bookstate) {
        this.bookstate = bookstate;
    }

    @Override
    public String toString() {
        return "{bookid:"+bookid+",readerid:"+readerid+",bookstate:"+bookstate+"}s";
    }
}
