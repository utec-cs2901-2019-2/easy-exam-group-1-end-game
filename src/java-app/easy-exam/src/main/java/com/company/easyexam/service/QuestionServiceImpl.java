package com.company.easyexam.service;

import com.company.easyexam.mapper.QuestionService;
import com.company.easyexam.model.Question;
import com.company.easyexam.model.QuestionPosted;
import com.company.easyexam.model.Rate;
import com.company.easyexam.repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;


import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

@Service
public  class QuestionServiceImpl implements QuestionService {

    @Autowired
    private QuestionRepository questionRepository;

    @Autowired
    private final MongoTemplate mongoTemplate;

    public QuestionServiceImpl(@Autowired final MongoTemplate mongoTemplate) {
        this.mongoTemplate = mongoTemplate;
    }


    @Override
    public List<Question> getCollectionForExam(int size, List<String> tags) {



        List<Question> questionList = questionRepository.findQuestionsByTagsContaining(tags);
        List<Question> newList = new ArrayList<>(size);

        for (int index = 0; index < size; index++) {

            Date questionDate = questionList.get(index).getDate();
            Calendar calendar = Calendar.getInstance();
            calendar.setTime(questionDate);
            calendar.add(Calendar.DATE,30);
            Date questionDatePlus30 = calendar.getTime();

            Date currentDate = new Date();

            if(currentDate.after(questionDatePlus30))
                newList.add(questionList.get(index));

        }


        return newList;
    }

    @Override
    public List<Question> getCollectionForChallenge(int size, List<String> tags) {

        List<Question> questionList = questionRepository.findQuestionsByTagsContaining(tags);
        List<Question> newList = new ArrayList<>(size);

        for (int index = 0; index < size; index++) {
            newList.add(questionList.get(index));
        }


        return newList;
    }

    @Override
    public void updateRating(List<Rate> rates) {

        for (Rate rate : rates) {

            Question question = questionRepository.findQuestionsById(rate.getId());

            Double currentAverage = question.getRating();
            Integer rateTimes = question.getRateTimes() + 1;
            Double newAverage = currentAverage + ((rate.getRating() - currentAverage) / rateTimes);


            mongoTemplate
                    .updateFirst(Query.query(Criteria.where("id").is(rate.getId())),
                            Update.update("rating", newAverage), Question.class);

            mongoTemplate
                    .updateFirst(Query.query(Criteria.where("id").is(rate.getId())),
                            Update.update("rateTimes", rateTimes), Question.class);

        }
    }


    @Override
    public void postQuestions(QuestionPosted question){

        Date currentDate = new Date();

        //for (QuestionPosted question: questions) {
            Question newQuestion = new Question(question.getDescription(),question.getAnswer(),0,0.0,question.getAuthor(),currentDate,question.getTags());
            mongoTemplate.save(newQuestion,"Question");
        //}

    }

}
