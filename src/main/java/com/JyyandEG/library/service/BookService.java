package com.JyyandEG.library.service;

import com.JyyandEG.library.Const.BookState;
import com.JyyandEG.library.bookmapper.BookMapper;
import com.JyyandEG.library.entity.BIAndRI;
import com.JyyandEG.library.entity.Book;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookService {

    @Autowired
    BookMapper bookMapper;

    private Byte[] sy = new Byte[0];

    public List<Book> searchBookByName(String bookname) {
        return bookMapper.searchBookByName(bookname);
    }

    public boolean getBookStateByBIRI(BIAndRI biAndRI) {
        Integer number = null;
        List<Integer> states = bookMapper.getBookStatesByRIAndBI(biAndRI);
        System.out.println("state " + states);
        synchronized (sy) {
            number = bookMapper.getBookNumberByBookId(biAndRI.getBookid());
        }
        if (states != null&&states.size()==1) {
            if (states.get(0) == BookState.isReturned || states.get(0) == BookState.isRefused) {

                if (number == null)
                    return false;
                if (number > 0)
                    return true;
                return false;
            } else {
                return false;
            }
        } else if (states==null){
            return true;
        }else if(states.size()>1){
            if(states.contains(BookState.isApplying)||states.contains(BookState.isBorrowed))
                return false;
            return true;
        }
        return true;
    }
}
