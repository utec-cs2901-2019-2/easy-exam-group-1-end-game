package com.company.easyexam.service;

import com.company.easyexam.mapper.QuestionService;
import com.company.easyexam.model.Question;
import com.company.easyexam.repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public  class QuestionServiceImpl implements QuestionService {

    @Autowired
    private QuestionRepository questionRepository;


    @Override
    public List<Question> getCollection(int size, List<String> tags) {

        List<Question> questionList = questionRepository.findQuestionsByTagsContaining(tags);
        List<Question> newList = new ArrayList<>(size);

        for (int index = 0;index<size;index++){
            newList.add(questionList.get(index));
        }


        return newList;
    }


}
