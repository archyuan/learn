package com.example.demo.entity;

public class BIAndRIWithBookONState {

    private String bookid;
    private int readerid;
    private int oldbookstate;
    private int newbookstate;

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

    public int getOldbookstate() {
        return oldbookstate;
    }

    public void setOldbookstate(int oldbookstate) {
        this.oldbookstate = oldbookstate;
    }

    public int getNewbookstate() {
        return newbookstate;
    }

    public void setNewbookstate(int newbookstate) {
        this.newbookstate = newbookstate;
    }
}
