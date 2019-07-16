package com.JyyandEG.library.service;


import com.JyyandEG.library.Util.BookAndReaderUtil;
import com.JyyandEG.library.entity.BookStateWithReader;
import com.JyyandEG.library.entity.BookStateWithReaderId;
import com.JyyandEG.library.entity.Reader;
import com.JyyandEG.library.entity.ReaderWithinIdAndPass;
import com.JyyandEG.library.readerMapper.ReaderMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReaderService {

    @Autowired
    ReaderMapper readerMapper;


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

}
