package com.JyyandEG.library.entity;

public class Reader {

    private Integer readerid;
    private String readername;
    private String readersex;
    private String readerocuupation;
    private String readertel;
    private String readeraddress;

    public Integer getReaderid() {
        return readerid;
    }

    public void setReaderid(Integer readerid) {
        this.readerid = readerid;
    }

    public String getReadername() {
        return readername;
    }

    public void setReadername(String readername) {
        this.readername = readername;
    }

    public String getReadersex() {
        return readersex;
    }

    public void setReadersex(String readersex) {
        this.readersex = readersex;
    }

    public String getReaderocuupation() {
        return readerocuupation;
    }

    public void setReaderocuupation(String readerocuupation) {
        this.readerocuupation = readerocuupation;
    }

    public String getReadertel() {
        return readertel;
    }

    public void setReadertel(String readertel) {
        this.readertel = readertel;
    }

    public String getReaderaddress() {
        return readeraddress;
    }

    public void setReaderaddress(String readeraddress) {
        this.readeraddress = readeraddress;
    }

    @Override
    public String toString() {
        return "{"+"readerid:"+readerid+",readername:"+readername+",readersex:"+readersex+"readerocuupation:"
                +readerocuupation+",readertel:"+readertel+",readeraddress:"+readeraddress+"}";
    }
}
