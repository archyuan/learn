package com.JyyandEG.library.readerMapper;

import com.JyyandEG.library.entity.*;
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
}
