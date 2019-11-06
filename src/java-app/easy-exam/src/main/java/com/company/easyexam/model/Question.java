package com.company.easyexam.model;


import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection = "Question")
public class Question {

    @Id
    private ObjectId id;

    private String description;
    private String answer;
    private String author;
    private List<String> tags;



    public Question( String description, String answer, String author, List<String> tags) {
        this.description = description;
        this.answer = answer;
        this.author = author;
        this.tags = tags;
    }

    public Question() {

    }

    public ObjectId getId() {
        return id;
    }

    public void setId(ObjectId   id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getAnswer() {
        return answer;
    }

    public void setAnswer(String answer) {
        this.answer = answer;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }
}
