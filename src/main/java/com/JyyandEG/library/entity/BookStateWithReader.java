package com.JyyandEG.library.entity;

import java.util.List;

public class BookStateWithReader {

    private  String bookid;
    private String bookname;
    private String borrowbooktime;
    private String returnbooktime;
    private String bookauthor;
    private String bookpublish;
    private String booktag;
    private List<String> bookstate;


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

    public String getBorrowbooktime() {
        return borrowbooktime;
    }

    public void setBorrowbooktime(String borrowbooktime) {
        this.borrowbooktime = borrowbooktime;
    }

    public String getReturnbooktime() {
        return returnbooktime;
    }

    public void setReturnbooktime(String returnbooktime) {
        this.returnbooktime = returnbooktime;
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

    public String getBooktag() {
        return booktag;
    }

    public void setBooktag(String booktag) {
        this.booktag = booktag;
    }

    public List<String> getBookstate() {
        return bookstate;
    }

    public void setBookstate(List<String> bookstate) {
        this.bookstate = bookstate;
    }

    @Override
    public String toString() {
        return "{booid:"+bookid+",bookname:"+bookname+",borrowbooktime:"+borrowbooktime
                +",returnbooktime:"+returnbooktime+",bookauthor:"+bookauthor
                +",bookpublish:"+bookpublish+",booktag:"+booktag+",bookstate:"+bookstate;
    }
}
