package com.example.demo.bookmapper;

import com.example.demo.entity.BIAndRI;
import com.example.demo.entity.Book;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface BookMapper {

    List<Book> getllbook();

    List<Book> searchBookByName(String bookname);

    Integer getBookStateByRIAndBI(BIAndRI biAndRI);

    Integer getBookNumberByBookId(String bookid);

    List<Integer> getBookStatesByRIAndBI(BIAndRI biAndRI);

}
