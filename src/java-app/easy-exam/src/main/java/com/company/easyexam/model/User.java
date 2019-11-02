package com.company.easyexam.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import java.util.List;

@Document(collection = "User")
public class User {

    private String name;
    private String lastName;
    @Indexed(name = "userName",unique = true)
    private String userName;

    @Id
    private String id;

    private String password;
    private String university;
    private String rol;

    public User() {}

    public User(String userName, String password) {}

    public User(String name, String lastName, String userName, String password, String university, String rol) {
        this.name = name;
        this.lastName = lastName;
        this.userName = userName;
        this.password = password;
        this.university = university;
        this.rol = rol;
    }

    public User(String name, String lastName, String userName, String id, String password, String university, String rol) {
        this.name = name;
        this.lastName = lastName;
        this.userName = userName;
        this.id = id;
        this.password = password;
        this.university = university;
        this.rol = rol;
    }


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getUniversity() {
        return university;
    }

    public void setUniversity(String university) {
        this.university = university;
    }

    public String getRol() {
        return rol;
    }

    public void setRol(String rol) {
        this.rol = rol;
    }
}

