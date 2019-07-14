package com.JyyandEG.library.service;

import com.JyyandEG.library.bookmapper.BookMapper;
import com.JyyandEG.library.entity.Book;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookService {

    @Autowired
    BookMapper bookMapper;

   public List<Book> searchBookByName(String bookname){
        return bookMapper.searchBookByName(bookname);
    }
}
