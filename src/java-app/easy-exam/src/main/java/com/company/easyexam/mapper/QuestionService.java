package com.company.easyexam.mapper;

import com.company.easyexam.model.Question;
import org.springframework.data.annotation.Id;

import java.util.List;

public interface QuestionService {
    public abstract List<Question> getCollection(int size,List<String> tags);
    public abstract void postQuestion(List<String> atributeList,List<String> tags);
    public abstract  void rateQuestion(Integer rate, Id id);


}
