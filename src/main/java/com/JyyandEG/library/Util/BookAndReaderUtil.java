package com.JyyandEG.library.Util;


import com.JyyandEG.library.Const.BookState;
import com.JyyandEG.library.entity.BookStateWithReader;
import com.JyyandEG.library.entity.BookStateWithReaderId;


import java.util.ArrayList;
import java.util.List;

public class BookAndReaderUtil {

    private static List<String> getReadlState(Integer state) {
        List<String> states = new ArrayList<>();
        if (state == null) {
            states.add("无状态");
            return states;
        }
        if (state == BookState.isApplying) {
            states.add("申请中");
        } else if (state == BookState.isReturned) {
            states.add("已归还");
        } else if (state == BookState.isBorrowed) {
            states.add("已借阅");
        }else if(state == BookState.isRefused){
            states.add("拒绝申请");
        }
        return states;

    }

    private static String NullDateTo(String date){
        if (date==null)
            return "----";
        return date;
    }


    public static List<BookStateWithReader> BsWRiToBsWR(List<BookStateWithReaderId> bookStateWithReaderIds) {

        List<BookStateWithReader> bookStateWithReaders = new ArrayList<>();
        if (bookStateWithReaderIds == null)
            return bookStateWithReaders;
        for (BookStateWithReaderId bookStateWithReaderId : bookStateWithReaderIds) {
            BookStateWithReader bookStateWithReader = new BookStateWithReader();
            bookStateWithReader.setBookauthor(bookStateWithReaderId.getBookauthor());
            bookStateWithReader.setBookid(bookStateWithReaderId.getBookid());
            bookStateWithReader.setBookname(bookStateWithReaderId.getBookname());
            bookStateWithReader.setBookpublish(bookStateWithReaderId.getBookpublish());
            bookStateWithReader.setBooktag(bookStateWithReaderId.getBooktag());
            bookStateWithReader.setBorrowbooktime(NullDateTo(bookStateWithReaderId.getBorrowbooktime()));
            bookStateWithReader.setReturnbooktime(NullDateTo(bookStateWithReaderId.getReturnbooktime()));
            bookStateWithReader.setBookstate(getReadlState(bookStateWithReaderId.getBookstate()));

            bookStateWithReaders.add(bookStateWithReader);
        }

        return bookStateWithReaders;
    }

}
