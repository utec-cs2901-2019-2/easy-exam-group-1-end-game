package com.company.easyexam.model;

import com.fasterxml.jackson.annotation.JsonAutoDetect;

@JsonAutoDetect
public class QuestionToCompile {
    private String description;
    private String answer;

    public QuestionToCompile(String description, String answer) {
        this.description = description;
        this.answer = answer;
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
}
