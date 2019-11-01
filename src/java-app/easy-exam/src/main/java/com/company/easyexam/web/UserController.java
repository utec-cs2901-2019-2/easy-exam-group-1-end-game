package com.company.easyexam.web;


import com.company.easyexam.model.User;
import com.company.easyexam.repository.UserRepository;
import com.company.easyexam.service.QuestionServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    private QuestionServiceImpl questionServiceImpl;

    @GetMapping("/list")
    public List<User> getAllUsers(){
        return userRepository.findAll();
    }

    @GetMapping("/")
    public String helloWorld() { return "Hello World"; }
}
