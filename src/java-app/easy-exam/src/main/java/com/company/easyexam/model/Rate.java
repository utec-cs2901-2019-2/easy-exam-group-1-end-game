package com.company.easyexam.model;

import com.fasterxml.jackson.annotation.JsonAutoDetect;

@JsonAutoDetect
public class Rate {

    private String id;
    private Integer rating;

    public Rate(String id, Integer rating) {
        this.id = id;
        this.rating = rating;
    }

    public String getId() {
        return this.id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Integer getRating() {
        return rating;
    }

    public void setRating(Integer rating) {
        this.rating = rating;
    }
}
