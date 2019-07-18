package com.example.demo.entity;

public class BIAndRI {

    private String bookid;
    private int readerid;

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

    @Override
    public String toString() {
        return "BIANDI  "+"bookid:"+bookid+", readerid:"+readerid;
    }
}
