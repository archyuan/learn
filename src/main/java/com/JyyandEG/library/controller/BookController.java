package com.JyyandEG.library.controller;

import com.JyyandEG.library.entity.BIAndRI;
import com.JyyandEG.library.entity.Book;
import com.JyyandEG.library.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import com.alibaba.fastjson.JSONObject;

import java.util.List;

@Controller
@RequestMapping("/book")
public class BookController {

    @Autowired
    BookService bookService;

    @PostMapping("/search")
    @ResponseBody
    public List<Book> srearchBookByname(@RequestBody JSONObject bookname) {
        List<Book> books = bookService.searchBookByName(bookname.getString("bookname"));
        System.out.println(books);
        return books;
    }

    @PostMapping("/isable")
    @ResponseBody
    public JSONObject bookIsAble(@RequestBody JSONObject bookanduser) {
        JSONObject jsonObject = new JSONObject();
        //jsonObject.put("disable", false);
        BIAndRI biAndRI = new BIAndRI();
        biAndRI.setBookid(bookanduser.getString("bookid"));
        biAndRI.setReaderid(Integer.parseInt(bookanduser.getString("userid")));
        System.out.println(bookanduser);
        System.out.println(biAndRI);
        jsonObject.put("disable",!bookService.getBookStateByBIRI(biAndRI));
        System.out.println(jsonObject);
        return jsonObject;
    }

}
