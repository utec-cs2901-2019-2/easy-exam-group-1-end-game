package com.company.easyexam.model;


import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.format.annotation.DateTimeFormat;

import javax.management.Query;
import java.util.Date;
import java.util.List;

@Document(collection = "Question")
public class Question {

    @Id
    private ObjectId id;

    private String description;
    private String answer;
    private Long rateTimes;
    private Long rate;
    private String author;
    private Date date;
    private List<String> tags;



    public Question( String description, String answer,Long rateTimes,Long rate, String author,Date date, List<String> tags) {
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

    public Long getRateTimes() {
        return rateTimes;
    }

    public void setRateTimes(Long rateTimes) {
        this.rateTimes = rateTimes;
    }

    public Long getRate() {return rate;}

    public void setRate(Long rate) {this.rate = rate;}

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

//    public void addRateTimes(){
//        this.rateTimes= this.rateTimes+1;
//    }

    public void updateRate(Long rating){
//        addRateTimes();
        Long newAverage = this.rate + ((rating-this.rate)/this.rateTimes);

//        Query query = new Query();
//        query.addCriteria(Criteria.where("name").is("appleC"));
//        query.fields().include("name");


    }
}
