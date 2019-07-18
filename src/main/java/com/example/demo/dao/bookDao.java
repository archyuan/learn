package com.example.demo.dao;

import com.example.demo.model.Book;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface bookDao {
    List<Book> selectBooks();
    Integer addBook(Book book);
    Book  getBookById(String bookId);
    Integer updateBook(Book book);
    void deleteBook(Book book);
}
