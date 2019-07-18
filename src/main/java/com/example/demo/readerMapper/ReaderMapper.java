package com.example.demo.readerMapper;

import com.example.demo.entity.*;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface ReaderMapper {


    List<Reader> getAllReader();

    ReaderWithinIdAndPass getReaderById(int id);

    List<BookStateWithReaderId> getReaderCordByReaderId(String readerid);

    int applyABook(BIAndRIWithBookState biAndRIWithBookState);
    int readerRegister(AddRederInfo addRederInfo);

    Integer getReaderId(AddRederInfo addRederInfo);

    Integer isRegister(AddRederInfo addRederInfo);

    List<BookInfoWithBorrowed>  getBookInfoWithBorrowAR(ReaderWithBookState readerWithBookState);

    Integer applytoreturnbook(BIAndRIWithBookONState biAndRIWithBookONState);
}
