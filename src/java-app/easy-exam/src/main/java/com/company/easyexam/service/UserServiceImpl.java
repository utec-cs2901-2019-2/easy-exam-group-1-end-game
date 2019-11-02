package com.company.easyexam.service;

import com.company.easyexam.mapper.UserService;
import com.company.easyexam.model.User;
import com.company.easyexam.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class UserServiceImpl implements UserService{
    @Autowired
    private UserRepository userRepository;

    @Override
    public void addUser(User user) {
    }

    @Override
    public User findUserName(String username) {
        return null;
    }


}
