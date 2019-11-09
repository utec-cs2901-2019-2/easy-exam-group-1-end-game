package com.company.easyexam.model;


import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.format.annotation.DateTimeFormat;


import java.util.Date;
import java.util.List;

@Document(collection = "Question")
public class Question {

    @Id
    private ObjectId id;

    private String description;
    private String answer;
    private Integer rateTimes;
    private Integer rate;
    private String author;
    private Date date;
    private List<String> tags;



    public Question( String description, String answer,Integer rateTimes,Integer rate, String author,Date date, List<String> tags) {
        this.description = description;
        this.answer = answer;
        this.rateTimes=rateTimes;
        this.rate = rate;
        this.author = author;
        this.date=date;
        this.tags = tags;
    }

    public Question() {

    }

    public Integer getRateTimes() {
        return rateTimes;
    }

    public void setRateTimes(Integer rateTimes) {
        this.rateTimes = rateTimes;
    }

    public Integer getRate() {return rate;}

    public void setRate(Integer rate) {this.rate = rate;}

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public List<String> getTags() {
        return tags;
    }

    public void setTags(List<String> tags) {
        this.tags = tags;
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

    private void addRateTimes(){
        this.rateTimes= this.rateTimes+1;
    }

    public void updateRate(Integer rating){
        addRateTimes();
        this.rate= this.rate + ((rating- this.rate)/ this.rateTimes);
    }
}
