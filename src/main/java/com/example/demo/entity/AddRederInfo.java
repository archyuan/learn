package com.example.demo.entity;

public class AddRederInfo {

    private String readername;
    private String readerpassword;
    private String readerphone;
    private String readersex;


    public String getReadername() {
        return readername;
    }

    public void setReadername(String readername) {
        this.readername = readername;
    }

    public String getReaderpassword() {
        return readerpassword;
    }

    public void setReaderpassword(String readerpassword) {
        this.readerpassword = readerpassword;
    }

    public String getReaderphone() {
        return readerphone;
    }

    public void setReaderphone(String readerphone) {
        this.readerphone = readerphone;
    }

    public String getReadersex() {
        return readersex;
    }

    public void setReadersex(String readersex) {
        this.readersex = readersex;
    }

    @Override
    public String toString() {
        return "{readername:"+readername+",readerpassword:"+readerpassword
                +",readerphone:"+readerphone+",readersex:"+readersex+"}";
    }
}
