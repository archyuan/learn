package com.JyyandEG.library.bookmapper;

import com.JyyandEG.library.entity.BIAndRI;
import com.JyyandEG.library.entity.Book;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

@Mapper
public interface BookMapper {


    List<Book> searchBookByName(String bookname);

    Integer getBookStateByRIAndBI(BIAndRI biAndRI);

    Integer getBookNumberByBookId(String bookid);

    List<Integer> getBookStatesByRIAndBI(BIAndRI biAndRI);

}
