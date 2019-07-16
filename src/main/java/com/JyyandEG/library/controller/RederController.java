package com.JyyandEG.library.controller;

import com.JyyandEG.library.entity.BookStateWithReader;
import com.JyyandEG.library.entity.BookStateWithReaderId;
import com.JyyandEG.library.entity.Reader;
import com.JyyandEG.library.service.ReaderService;


import com.alibaba.fastjson.JSONObject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/reader")
public class RederController {

    @Autowired
    ReaderService readerService;

    @GetMapping("/allreader")
    @ResponseBody
    public List<Reader> getAllReader() {
        return readerService.getAllReader();
    }

    @PostMapping("/login")
    @ResponseBody
    public JSONObject CheckLogin(@RequestBody JSONObject jsonObject) {

        JSONObject js = new JSONObject();
        ;
        if (jsonObject != null) {
            System.out.println(jsonObject);
            String readerid = jsonObject.getString("userid");
            String pass = jsonObject.getString("password");
            if (readerService.checkReaderPassById(Integer.parseInt(readerid), pass)) {
                js.put("a", "success");
                return js;
            }
            js.put("a", "fail");
        } else {

            js.put("a", "fail");
        }

        return js;

    }


    @PostMapping("/readercord")
    @ResponseBody
    public List<BookStateWithReader> ReaderCordBook(){
        return readerService.getReaderCordByReaderId("101000");
    }


}
