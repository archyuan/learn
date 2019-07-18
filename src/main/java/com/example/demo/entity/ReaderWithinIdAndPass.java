package com.example.demo.entity;

public class ReaderWithinIdAndPass {

    private int readerid;
    private String readerpass;


    public int getReaderid() {
        return readerid;
    }

    public void setReaderid(int readerid) {
        this.readerid = readerid;
    }

    public String getReaderpass() {
        return readerpass;
    }

    public void setReaderpass(String readerpass) {
        this.readerpass = readerpass;
    }

    @Override
    public String toString() {
        return "{readerid:" + readerid + ",readerpass:" + readerpass + "}";
    }
}
