package com.company.easyexam.service;

import com.company.easyexam.mapper.QuestionService;
import com.company.easyexam.model.Question;
import com.company.easyexam.repository.QuestionRepository;
import org.springframework.data.annotation.Id;

import java.util.List;

public class QuestionServiceImpl implements QuestionService {

    private QuestionRepository questionRepository;

    @Override
    public List<Question> getCollection(int size, List<String> tags) {
     questionRepository.findByTags(tags);
        return null;
    }

    @Override
    public void postQuestion(List<String> atributeList, List<String> tags) {
        Question newQuestion= new Question();
        questionRepository.save(newQuestion);
    }

    @Override
    public void rateQuestion(Integer rate, Id id) {
        questionRepository.findById(id);

    }
}
