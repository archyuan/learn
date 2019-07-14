package com.JyyandEG.library.bookmapper;

import com.JyyandEG.library.entity.Book;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface BookMapper {


    List<Book> searchBookByName(String bookname);

}
