package com.example.demo.entity;

public class ApplyBookEntity {

    private String bookid;
    private String readerid;
    private Integer bookstate;

    public String getBookid() {
        return bookid;
    }

    public void setBookid(String bookid) {
        this.bookid = bookid;
    }

    public String getReaderid() {
        return readerid;
    }

    public void setReaderid(String readerid) {
        this.readerid = readerid;
    }

    public Integer getBookstate() {
        return bookstate;
    }

    public void setBookstate(Integer bookstate) {
        this.bookstate = bookstate;
    }


    @Override
    public String toString() {
        return "{bookid:"+bookid+",readerid:"+readerid+",bookstate"+bookstate+"}";
    }
}
