package com.example.demo.service;


import com.alibaba.fastjson.JSONObject;
import com.example.demo.Const.AdminType;
import com.example.demo.dao.AdminDao;
import com.example.demo.entity.AdminEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdminService {

    @Autowired
    AdminDao adminDao;

    private String isRight(AdminEntity adminEntity){
         String managername = adminDao.getAdminName(adminEntity);
         if (managername == null){
             return "fail";
         }
        return managername;
    }

    private AdminEntity JsObToAdminEntiy(JSONObject jsonObject) {
        AdminEntity adminEntity = new AdminEntity();
        adminEntity.setManagerID(Integer.parseInt(jsonObject.getString("username")));
        adminEntity.setManagerPassword(jsonObject.getString("password"));
        String option = jsonObject.getString("option");
        if (option.equals("1")) {
            adminEntity.setManagerType(AdminType.option1);
        } else if (option.equals("2")) {
            adminEntity.setManagerType(AdminType.option2);
        }
        return adminEntity;
    }


    public JSONObject checklogin(JSONObject admin){
        AdminEntity adminEntity = JsObToAdminEntiy(admin);
        JSONObject jsonObject = new JSONObject();
        String mn=isRight(adminEntity);
        if (mn.equals("fail")) {
          jsonObject.put("state","fail");
          return jsonObject;
        }
        jsonObject.put("state","success");
        jsonObject.put("managername",mn);
        return jsonObject;
    }


}
