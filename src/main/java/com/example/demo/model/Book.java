package com.example.demo.model;


public class Book {
    private String key;
    private String bookId;
    private String bookName;
    private String bookAuthor;
    private String bookPublisher;
    private String bookInTime;
    private String bookNumber;
    private String bookType;
    private String bookIntro;

    public String getKey() {
        return key;
    }

    public void setKey(String key) {
        this.key = key;
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

    public String getBookAuthor() {
        return bookAuthor;
    }

    public void setBookAuthor(String bookAuthor) {
        this.bookAuthor = bookAuthor;
    }

    public String getBookPublisher() {
        return bookPublisher;
    }

    public void setBookPublisher(String bookPublisher) {
        this.bookPublisher = bookPublisher;
    }

    public String getBookInTime() {
        return bookInTime;
    }

    public void setBookInTime(String bookInTime) {
        this.bookInTime = bookInTime;
    }

    public String getBookNumber() {
        return bookNumber;
    }

    public void setBookNumber(String bookNumber) {
        this.bookNumber = bookNumber;
    }

    public String getBookType() {
        return bookType;
    }

    public void setBookType(String bookType) {
        this.bookType = bookType;
    }

    public String getBookIntro() {
        return bookIntro;
    }

    public void setBookIntro(String bookIntro) {
        this.bookIntro = bookIntro;
    }

    @Override
    public String toString() {
        return "Book{" +
                "key='" + key + '\'' +
                "bookId='" + bookId + '\'' +
                ", bookName='" + bookName + '\'' +
                ", bookAuthor='" + bookAuthor + '\'' +
                ", bookPublisher='" + bookPublisher + '\'' +
                ", bookInTime='" + bookInTime + '\'' +
                ", bookNumber='" + bookNumber + '\'' +
                ", bookType='" + bookType + '\'' +
                ", bookIntro='" + bookIntro + '\'' +
                '}';
    }
}