package com.company.easyexam.mapper;

import com.company.easyexam.model.User;

public interface UserService {
    public abstract void addUser(User user);

    public abstract User findUserName(String username);
}
