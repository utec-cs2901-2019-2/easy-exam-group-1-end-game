package com.company.easyexam.model;
import java.io.Serializable;

public class AuthenticationResponse implements Serializable {

    private final String token;

    public AuthenticationResponse(String jwt) {
        this.token = jwt;
    }

    public String getToken() {
        return token;
    }
}