package com.company.easyexam.model;


import org.springframework.data.annotation.Id;

import java.util.List;

public class Question {

    @Id
    private int id;

    private String description;
    private String answer;
    private String author;
    private List<String> tags;



    public Question(int id, String description, String answer, String author, List<String> tags) {
        this.id = id;
        this.description = description;
        this.answer = answer;
        this.author = author;
        this.tags = tags;
    }

    public Question() {

    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
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
