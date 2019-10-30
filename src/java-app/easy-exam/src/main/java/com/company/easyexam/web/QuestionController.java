package com.company.easyexam.web;

import com.company.easyexam.model.Question;
import com.company.easyexam.service.QuestionServiceImpl;
import org.springframework.data.annotation.Id;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/question")
public class QuestionController {

    private QuestionServiceImpl questionServiceImpl;

    @GetMapping("/collection/{list}")
    public List<Question> getCollectionOfQuestions(int size, List<String> tags){
        return questionServiceImpl.getCollection(size,tags);
    }

    @GetMapping("/rate/{id}/{bool}")
    public void rateQuestion(Integer rate, Id id){
        questionServiceImpl.rateQuestion(rate,id);
    }

    @PostMapping("/post")
    public void postQuestion(List<String> atributeList, List<String> tags){
        questionServiceImpl.postQuestion(atributeList,tags);
    }
}
