package com.example.demo.controller;

import com.alibaba.fastjson.JSONObject;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/admin")
public class AdminController {



        @PostMapping("/login")
        @ResponseBody
        public JSONObject login(@RequestBody JSONObject jsonObject){
            JSONObject resultjs = new JSONObject();

            System.out.println(jsonObject);
             resultjs.put("test","success");
            return resultjs;
        }
}
