package com.company.easyexam.model;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import org.bson.types.ObjectId;

@JsonAutoDetect
public class Rate {

    private ObjectId id;
    private Integer rating;

    public Rate(ObjectId id, Integer rating) {
        this.id = id;
        this.rating = rating;
    }

    public ObjectId getId() {
        return id;
    }

    public void setId(ObjectId id) {
        this.id = id;
    }

    public Integer getRating() {
        return rating;
    }

    public void setRating(Integer rating) {
        this.rating = rating;
    }
}
