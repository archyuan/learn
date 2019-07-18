package com.example.demo.controller;

import com.alibaba.fastjson.JSONObject;
import com.example.demo.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/admin")
public class AdminController {

        @Autowired
        AdminService adminService;

        @PostMapping("/login")
        @ResponseBody
        public JSONObject login(@RequestBody JSONObject jsonObject){
            JSONObject resultjs = new JSONObject();
               if (jsonObject ==null){
                   resultjs.put("state","noneedinfo");
                    return resultjs;
               }

            System.out.println(jsonObject);
              // System.out.println(adminService.checklogin(jsonObject));
        //     resultjs.put("test","success");
            return adminService.checklogin(jsonObject);
        }
}
