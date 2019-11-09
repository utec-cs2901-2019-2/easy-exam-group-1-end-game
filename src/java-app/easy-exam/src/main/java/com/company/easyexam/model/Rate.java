package com.company.easyexam.model;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import org.bson.types.ObjectId;
import org.springframework.data.util.Pair;

import java.util.List;

@JsonAutoDetect
public class Rate {

    private ObjectId id;
    private Long rating;

    public Rate(ObjectId id, Long rating) {
        this.id = id;
        this.rating = rating;
    }

    public ObjectId getId() {
        return id;
    }

    public void setId(ObjectId id) {
        this.id = id;
    }

    public Long getRating() {
        return rating;
    }

    public void setRating(Long rating) {
        this.rating = rating;
    }
}
