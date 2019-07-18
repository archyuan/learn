package com.example.demo.dao;

import com.example.demo.model.Borrow;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface borrowDao {
    List<Borrow> selectBorrows();
    List<Borrow> selectBorrowRequest();
    List<Borrow> selectReturnRequest();
    Integer updateAgreeBorrow(Borrow borrow);
    Integer updateRefuseBorrow(Borrow borrow);
    Integer updateAgreeReturn(Borrow borrow);

}
