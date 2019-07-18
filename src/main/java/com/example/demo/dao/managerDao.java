package com.example.demo.dao;

import com.example.demo.model.Manager;
import org.apache.ibatis.annotations.Mapper;


import java.util.List;

@Mapper
public interface managerDao {
    List<Manager> selectManagers();
    Integer addManager(Manager manager);
    Manager  getManagerById(Integer managerId);
    Integer updateManager(Manager manager);
    void deleteManager(Manager manager);

}
