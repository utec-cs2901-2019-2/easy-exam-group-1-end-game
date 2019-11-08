package com.company.easyexam.web;

import com.company.easyexam.mapper.QuestionService;
import com.company.easyexam.model.Question;
import com.company.easyexam.model.Tags;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/question")
public class QuestionController {

//    @Autowired
//    private QuestionRepository questionRepository;

    @Autowired
    private QuestionService questionService;

//    @Autowired
//    private QuestionServiceImpl questionServiceImpl;


//    @GetMapping("/exam/{tag1}/{tag2}")
//    public List<Question> getCollectionOfQuestions(@PathVariable String tag1,@PathVariable String tag2){
//
//        List<String> tags = new ArrayList<>();
//        tags.add(tag1);
//        tags.add(tag2);
//        List<Question> list;
//        list = questionService.getCollection(2,tags);
//        return list;
//    }

    @RequestMapping(value = "/exam/{size}", method = RequestMethod.POST)
    public List<Question> getCollectionOfQuestions(@RequestBody final Tags tags, @PathVariable int size){
        List<String> tagList = tags.getTags();
        return questionService.getCollection(size,tagList);
    }

}
