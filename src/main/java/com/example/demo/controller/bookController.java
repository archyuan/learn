package com.example.demo.controller;


import com.alibaba.fastjson.JSONObject;
import com.example.demo.model.Book;
import com.example.demo.dao.bookDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
public class bookController {
    @Autowired
    private bookDao bookDAO;

    @GetMapping("/bookList")
    @ResponseBody
    public List<Book> getBooks() {
        return bookDAO.selectBooks();
    }

    @PostMapping("/addBook")
    @ResponseBody
    public String insertBooks(@RequestBody Book book) {
        System.out.println(book);

        if(bookDAO.getBookById(book.getBookId())!=null){
            System.out.println("zheli");
            return "alreadyhave";
        }
        else {
            bookDAO.addBook(book);
            return "successadd";}
    }
    @PostMapping("/getOneBookInfo")
    @ResponseBody
    public Book getBookInfo(@RequestBody JSONObject book){
        System.out.println(book);
        System.out.println(book.getString("bookId"));
        return bookDAO.getBookById(book.getString("bookId"));
    }

    @PostMapping("/updateBook")
    @ResponseBody
    public void updateBook(@RequestBody Book book){
        System.out.println(book);
        bookDAO.updateBook(book);
    }

    @PostMapping("/deleteBook")
    @ResponseBody
    public void deleteBook(@RequestBody Book book){
        System.out.println(book);
        bookDAO.deleteBook(book);
    }

}
