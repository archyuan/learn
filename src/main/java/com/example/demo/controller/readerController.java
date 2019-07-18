package com.example.demo.controller;


import com.alibaba.fastjson.JSONObject;
import com.example.demo.model.Reader;
import com.example.demo.dao.readerDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
public class readerController {
    @Autowired
    private readerDao readerDAO;

    @GetMapping("/readerList")
    @ResponseBody
    public List<Reader> getReaders(){
        return readerDAO.selectReaders();
    }

    @PostMapping("/addReader")
    @ResponseBody
    public Integer insertReaders(@RequestBody Reader reader) {
        System.out.println(reader);
        readerDAO.addReader(reader);

        return 1;
    }
    @PostMapping("/getOneReaderInfo")
    @ResponseBody
    public Reader getReaderInfo(@RequestBody JSONObject reader){
        return readerDAO.getReaderById(Integer.parseInt(reader.getString("readerId")));
    }

    @PostMapping("/updateReader")
    @ResponseBody
    public void updatReader(@RequestBody Reader reader){
        System.out.println(reader);
        readerDAO.updateReader(reader);
    }

    @PostMapping("/deleteReader")
    @ResponseBody
    public void deleteReader(@RequestBody Reader reader){
        System.out.println(reader);
        readerDAO.deleteReader(reader);
    }
}
