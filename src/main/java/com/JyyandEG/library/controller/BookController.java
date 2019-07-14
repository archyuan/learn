package com.JyyandEG.library.controller;

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
    public List<Book> srearchBookByname(@RequestBody JSONObject bookname ){
        List<Book> books = bookService.searchBookByName(bookname.getString("bookname"));
       System.out.println(books);
     return books;
    }
}
