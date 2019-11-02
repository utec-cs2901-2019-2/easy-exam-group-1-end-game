package com.company.easyexam.repository;


import com.company.easyexam.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;


public interface UserRepository extends MongoRepository<User,String> {

    User findByUserName(String userName);

}
