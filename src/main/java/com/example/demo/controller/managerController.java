package com.example.demo.controller;


import com.alibaba.fastjson.JSONObject;
import com.example.demo.model.Manager;
import com.example.demo.dao.managerDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
public class managerController {
    @Autowired
    private managerDao managerDAO;

    @GetMapping("/managerList")
    @ResponseBody
    public List<Manager> getManagers(){
        return managerDAO.selectManagers();
    }

    @PostMapping("/addManager")
    @ResponseBody
    public Integer insertManagers(@RequestBody Manager manager){
        managerDAO.addManager(manager);
        return 1;
    }

    @PostMapping("/getOneManagerInfo")
    @ResponseBody
    public Manager getManagerInfo(@RequestBody JSONObject manager){
        System.out.println(manager);
       return managerDAO.getManagerById(Integer.parseInt(manager.getString("managerId")));
    }

    @PostMapping("/updateManager")
    @ResponseBody
    public void updateManager(@RequestBody Manager manager){
        System.out.println(manager);
        managerDAO.updateManager(manager);
    }

    @PostMapping("/deleteManager")
    @ResponseBody
    public void deleteManager(@RequestBody Manager manager){
        System.out.println(manager);
        managerDAO.deleteManager(manager);
    }

}
