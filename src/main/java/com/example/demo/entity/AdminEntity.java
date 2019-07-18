package com.example.demo.entity;

public class AdminEntity {
    private Integer managerID;
    private String managerPassword;
    private String managerType;


    public Integer getManagerID() {
        return managerID;
    }

    public void setManagerID(Integer managerID) {
        this.managerID = managerID;
    }

    public String getManagerPassword() {
        return managerPassword;
    }

    public void setManagerPassword(String managerPassword) {
        this.managerPassword = managerPassword;
    }

    public String getManagerType() {
        return managerType;
    }

    public void setManagerType(String managerType) {
        this.managerType = managerType;
    }

    @Override
    public String toString() {
        return "{managerID:"+managerID+",managerPassword:"+managerPassword+",managerType:"+managerType+"}";
    }
}
