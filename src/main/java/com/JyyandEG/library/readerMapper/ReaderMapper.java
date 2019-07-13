package com.JyyandEG.library.readerMapper;

import com.JyyandEG.library.entity.Reader;
import com.JyyandEG.library.entity.ReaderWithinIdAndPass;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface ReaderMapper {


    List<Reader> getAllReader();

    ReaderWithinIdAndPass getReaderById(int id);

}
