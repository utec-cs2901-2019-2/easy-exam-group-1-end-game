package com.company.easyexam.model;


import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


import java.util.Date;
import java.util.List;

@Document(collection = "Question")
public class Question {

    @Id
    private ObjectId id;

    private String description;
    private String answer;
    private Integer rateTimes;
    private Double rating;
    private String author;
    private Date date;
    private List<String> tags;



    public Question(String description, String answer, Integer rateTimes, Double rate, String author, Date date, List<String> tags) {
        this.description = description;
        this.answer = answer;
        this.rateTimes=rateTimes;
        this.rating = rate;
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

    public Double getRating() {return rating;}

    public void setRating(Double rating) {this.rating = rating;}

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
        this.rating = this.rating + ((rating- this.rating)/ this.rateTimes);
    }
}
