package com.company.easyexam.mapper;

import com.company.easyexam.model.Question;
import com.company.easyexam.model.QuestionPosted;
import com.company.easyexam.model.Rate;
import com.company.easyexam.repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Optional;

public interface QuestionService {

    public abstract List<Question> getCollectionForExam( int size ,List<String> tags);
    public abstract List<Question> getCollectionForChallenge( int size ,List<String> tags);
    public abstract void updateRating(List<Rate> rates);
    public abstract void postQuestions(QuestionPosted question);
}
