package com.JyyandEG.library.controller;

import com.JyyandEG.library.Const.InsertState;
import com.JyyandEG.library.entity.*;
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
    public List<BookStateWithReader> ReaderCordBook(@RequestBody  JSONObject jsonObject){
        System.out.println(jsonObject);
        List<BookStateWithReader> bookStateWithReaders=null;
        if (jsonObject.getString("userid").equals("0"))
            return bookStateWithReaders;
        bookStateWithReaders= readerService.getReaderCordByReaderId(jsonObject.getString("userid"));
        System.out.println(bookStateWithReaders);
        return bookStateWithReaders;
    }

    @PostMapping("/applyabook")
    @ResponseBody
    public String isSuccessForApply(@RequestBody BIAndRI biAndRI){
        System.out.println(biAndRI);
        BIAndRIWithBookState biAndRIWithBookState = new BIAndRIWithBookState();
        biAndRIWithBookState.setBookid(biAndRI.getBookid());
        biAndRIWithBookState.setReaderid(biAndRI.getReaderid());
        biAndRIWithBookState.setBookstate(0);
        return readerService.applyABook(biAndRIWithBookState);
    }


    @PostMapping("/register")
    @ResponseBody
    public JSONObject readerRegister(@RequestBody AddRederInfo addRederInfo){
        JSONObject jsonObject = new JSONObject();
          Integer isexit = readerService.isexit(addRederInfo);
          if (isexit!=null){
              jsonObject.put("registerstate",String.valueOf(isexit));
              jsonObject.put("isexit","y");
              return jsonObject;
          }

          int num = readerService.registerReader(addRederInfo);

          if(num>0){
              String readerid = readerService.getReaderId(addRederInfo);
              jsonObject.put("registerstate",readerid);

          }else {
               jsonObject.put("registerstate","fail");
          }
          jsonObject.put("isexit","n");
        System.out.println(addRederInfo);
          return jsonObject;
    }

}
