package com.company.easyexam.service;

import com.company.easyexam.model.User;
import com.company.easyexam.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class MyUserDetailsService implements UserDetailsService {

    @Autowired
    UserRepository repository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = repository.findByUserName(username);
        if(user != null) {
            return new org.springframework.security.core.userdetails.User(username, user.getPassword(), new ArrayList<>());
        } else {
            throw new UsernameNotFoundException("username not found");
        }
    }
}
