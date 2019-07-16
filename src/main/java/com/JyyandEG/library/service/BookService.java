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
        Integer number=null;
         Integer state = bookMapper.getBookStateByRIAndBI(biAndRI);
         System.out.println("state "+state);
         if(state!=null){
             if (state== BookState.isReturned) {
                  synchronized (sy){
                       number = bookMapper.getBookNumberByBookId(biAndRI.getBookid());
                  }
                  if(number==null)
                      return false;
                  if (number>0)
                      return true;
                 return false;
             }
             else {
                 return false;
             }
         }else {
             return true;
         }
    }
}
