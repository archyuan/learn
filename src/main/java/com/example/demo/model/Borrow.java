package com.example.demo.model;


public class Borrow {
    private String borrowId;
    private String bookId;
    private String bookName;
    private String readerId;
    private String borrowTime;
    private String returnTime;
    private String borrowStation;

    public String getBorrowId() {
        return borrowId;
    }

    public void setBorrowId(String borrowId) {
        this.borrowId = borrowId;
    }

    public String getBookId() {
        return bookId;
    }

    public void setBookId(String bookId) {
        this.bookId = bookId;
    }

    public String getBookName() {
        return bookName;
    }

    public void setBookName(String bookName) {
        this.bookName = bookName;
    }

    public String getReaderId() {
        return readerId;
    }

    public void setReaderId(String readerId) {
        this.readerId = readerId;
    }

    public String getBorrowTime() {
        return borrowTime;
    }

    public void setBorrowTime(String borrowTime) {
        this.borrowTime = borrowTime;
    }

    public String getReturnTime() {
        return returnTime;
    }

    public void setReturnTime(String returnTime) {
        this.returnTime = returnTime;
    }

    public String getBorrowStation() {
        return borrowStation;
    }

    public void setBorrowStation(String borrowStation) {
        this.borrowStation = borrowStation;
    }

    @Override
    public String toString() {
        return "Borrow{" +
                "borrowId='" + borrowId + '\'' +
                "bookId='" + bookId + '\'' +
                ", bookName='" + bookName + '\'' +
                ", readerId='" + readerId + '\'' +
                ", borrowTime='" + borrowTime + '\'' +
                ", returnTime='" + returnTime + '\'' +
                ", borrowStation='" + borrowStation + '\'' +
                '}';
    }
}