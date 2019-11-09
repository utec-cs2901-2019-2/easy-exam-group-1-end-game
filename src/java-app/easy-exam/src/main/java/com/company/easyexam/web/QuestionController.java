package com.company.easyexam.web;

import com.company.easyexam.mapper.QuestionService;
import com.company.easyexam.model.Question;
import com.company.easyexam.model.Rate;
import com.company.easyexam.model.Tags;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/question")
public class QuestionController {

    @Autowired
    private QuestionService questionService;



    @PostMapping("exam/{size}")
    public List<Question> getCollectionOfQuestionsForExam(@RequestBody final Tags tags, @PathVariable int size){
        List<String> tagList = tags.getTags();
        return questionService.getCollectionForExam(size,tagList);
    }

    @PostMapping("challenge/{size}")
    public List<Question> getCollectionOfQuestionsForChallenge(@RequestBody final Tags tags, @PathVariable int size){
       List<String> tagList = tags.getTags();
        return questionService.getCollectionForChallenge(size,tagList);
    }

    @PostMapping("rate")
    public void setRatings(@RequestBody final List<Rate> rates){

        questionService.updateRating(rates);
    }



}
