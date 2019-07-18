package com.example.demo.model;


public class Manager {
    private String managerId;
    private String managerName;
    private String managerSex;
    private String managerAge;
    private String managerEmployeeTime;
    private String managerType;
    private String managerPassword;



    public String getManagerId() {

        return managerId;
    }

    public void setManagerId (String managerId) {

        this.managerId = managerId;
    }

    public String getManagerName() {

        return managerName;
    }

    public void setManagerName(String managerName) {

        this.managerName = managerName;
    }

    public String getManagerSex() {
        return managerSex;
    }

    public void setManagerSex(String managerSex) {
        this.managerSex = managerSex;
    }

    public String getManagerAge() {
        return managerAge;
    }

    public void setManagerAge(String managerAge) {
        this.managerAge = managerAge;
    }

    public String getManagerEmployeeTime() {
        return managerEmployeeTime;
    }

    public void setManagerEmployeeTime(String managerEmployeeTime) {
        this.managerEmployeeTime = managerEmployeeTime;
    }

    public String getManagerType() {
        return managerType;
    }

    public void setManagerType(String managerType) {
        this.managerType = managerType;
    }

    public String getManagerPassword() {
        return managerPassword;
    }

    public void setManagerPassword(String managerPassword) {
        this.managerPassword = managerPassword;
    }

    @Override
    public String toString() {
        return "Manager{" +
                "managerId='" + managerId + '\'' +
                ", managerName='" + managerName + '\'' +
                ", managerSex='" + managerSex + '\'' +
                ", managerAge='" + managerAge + '\'' +
                ", managerEmployeeTime='" + managerEmployeeTime + '\'' +
                ", managerType='" + managerType + '\'' +
                ", managerPassword='" + managerPassword + '\'' +
                '}';
    }
}