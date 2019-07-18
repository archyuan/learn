package com.example.demo.dao;

import com.example.demo.entity.AdminEntity;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface AdminDao {

    String getAdminName(AdminEntity adminEntity);
}

