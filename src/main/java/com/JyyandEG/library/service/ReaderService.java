package com.JyyandEG.library.service;


import com.JyyandEG.library.Const.BookState;
import com.JyyandEG.library.Const.InsertState;
import com.JyyandEG.library.Util.BookAndReaderUtil;
import com.JyyandEG.library.bookmapper.BookMapper;
import com.JyyandEG.library.entity.*;
import com.JyyandEG.library.readerMapper.ReaderMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReaderService {

    @Autowired
    ReaderMapper readerMapper;

    @Autowired
    BookMapper bookMapper;

    private Byte[] lc = new Byte[0]; //查询锁
    private Byte[] lcc = new Byte[0]; //插入锁
    private Byte[] regisetrlc = new Byte[0];// 注册用户锁

    private int havaEnoughBookNumber(BIAndRIWithBookState biAndRIWithBookState) {
        int number = 0;
        synchronized (lc) {
            number = bookMapper.getBookNumberByBookId(biAndRIWithBookState.getBookid());
        }
        return number;
    }

    private  List<Integer> checkBookIsReturn(BIAndRIWithBookState biAndRIWithBookState){
        BIAndRI biAndRI = new BIAndRI();
        biAndRI.setBookid(biAndRIWithBookState.getBookid());
        biAndRI.setReaderid(biAndRIWithBookState.getReaderid());
       List<Integer> states= bookMapper.getBookStatesByRIAndBI(biAndRI);
         return states;
    }

    public List<Reader> getAllReader() {
        return readerMapper.getAllReader();
    }

    public boolean checkReaderPassById(int id, String pass) {

        ReaderWithinIdAndPass readerWithinIdAndPass = null;

        readerWithinIdAndPass = readerMapper.getReaderById(id);
        if (readerWithinIdAndPass == null)
            return false;

        else {
            return pass.equals(readerWithinIdAndPass.getReaderpass());
        }

    }

    public List<BookStateWithReader> getReaderCordByReaderId(String readerid) {
        return BookAndReaderUtil.BsWRiToBsWR(readerMapper.getReaderCordByReaderId(readerid));
    }

    public String applyABook(BIAndRIWithBookState biAndRIWithBookState) {

       List<Integer> states= checkBookIsReturn(biAndRIWithBookState);
        if (states!=null&&(states.contains(BookState.isBorrowed)||states.contains(BookState.isApplying)
        || states.contains(BookState.isApplyingtoReturn))){


           return  "isBorrowedOrApllying";
        }
        if (havaEnoughBookNumber(biAndRIWithBookState) > 0) {
            int isInsert = 0;
            synchronized (lcc) {
                isInsert = readerMapper.applyABook(biAndRIWithBookState);
            }
            if (isInsert > 0) {
                return InsertState.success;
            } else {
                return InsertState.fail;
            }

        } else {
            return InsertState.fail;
        }

    }

    public Integer isexit(AddRederInfo addRederInfo){
        Integer rederid= null;
        rederid=readerMapper.isRegister(addRederInfo);
        return rederid;
    }

    public Integer registerReader(AddRederInfo addRederInfo){

        int num=-1;
        synchronized (regisetrlc){

            num = readerMapper.readerRegister(addRederInfo);
        }
        return num;
    }


    public String getReaderId(AddRederInfo addRederInfo){

         Integer readerid = readerMapper.getReaderId(addRederInfo);
         if (readerid ==null){
             return "fail";
         }
        return String.valueOf(readerid);
    }
}
