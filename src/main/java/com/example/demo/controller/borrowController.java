package com.example.demo.controller;


import com.example.demo.model.Borrow;
import com.example.demo.dao.borrowDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
@EnableAutoConfiguration
public class borrowController {
    @Autowired
    private borrowDao borrowDAO;

    @GetMapping("/borrowList")
    @ResponseBody
    public List<Borrow> getBorrows() {
        return borrowDAO.selectBorrows();
    }

    @GetMapping("/borrowRequestList")
    @ResponseBody
    public List<Borrow> getBorrowRequest() {
        return borrowDAO.selectBorrowRequest();
    }

    @GetMapping("/returnRequestList")
    @ResponseBody
    public List<Borrow> getReturnRequest() {
        return borrowDAO.selectReturnRequest();
    }

    @PostMapping("/agreeBorrow")
    @ResponseBody
    public void agreeBorrow(@RequestBody Borrow borrow){
        System.out.println(borrow);
        borrowDAO.updateAgreeBorrow(borrow);
    }

    @PostMapping("/refuseBorrow")
    @ResponseBody
    public void refuseBorrow(@RequestBody Borrow borrow){
        System.out.println(borrow);
        borrowDAO.updateRefuseBorrow(borrow);
    }

    @PostMapping("/agreeReturn")
    @ResponseBody
    public void agreeReturn(@RequestBody Borrow borrow){
        System.out.println(borrow);
        borrowDAO.updateAgreeReturn(borrow);
    }
}
