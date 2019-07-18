package com.example.demo.model;


public class Reader {
    private String readerId;
    private String readerName;
    private String readerSex;
    private String readerOcupation;
    private String readerTel;
    private String readerAddress;
    private String readerPassword;


    public String getReaderId() {
        return readerId;
    }

    public void setReaderId(String readerId) {
        this.readerId = readerId;
    }

    public String getReaderName() {
        return readerName;
    }

    public void setReaderName(String readerName) {
        this.readerName = readerName;
    }

    public String getReaderSex() {
        return readerSex;
    }

    public void setReaderSex(String readerSex) {
        this.readerSex = readerSex;
    }

    public String getReaderOcupation() {
        return readerOcupation;
    }

    public void setReaderOcupation(String readerOcupation) {
        this.readerOcupation = readerOcupation;
    }

    public String getReaderTel() {
        return readerTel;
    }

    public void setReaderTel(String readerTel) {
        this.readerTel = readerTel;
    }

    public String getReaderAddress() {
        return readerAddress;
    }

    public void setReaderAddress(String readerAddress) {
        this.readerAddress = readerAddress;
    }

    public String getReaderPassword() {
        return readerPassword;
    }

    public void setReaderPassword(String readerPassword) {
        this.readerPassword = readerPassword;
    }

    @Override
    public String toString() {
        return "Reader{" +
                "readerId='" + readerId + '\'' +
                ", readerName='" + readerName + '\'' +
                ", readerSex='" + readerSex + '\'' +
                ", readerOcupation='" + readerOcupation + '\'' +
                ", readerTel='" + readerTel + '\'' +
                ", readerAddress='" + readerAddress + '\'' +
                ", readerPassword='" + readerPassword + '\'' +
                '}';
    }
}