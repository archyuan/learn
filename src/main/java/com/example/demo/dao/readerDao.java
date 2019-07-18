package com.example.demo.dao;

import com.example.demo.model.Reader;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface readerDao {
    List<Reader> selectReaders();
    Integer addReader(Reader reader);
    Reader  getReaderById(Integer readerId);
    Integer updateReader(Reader reader);
    void deleteReader(Reader reader);
}
