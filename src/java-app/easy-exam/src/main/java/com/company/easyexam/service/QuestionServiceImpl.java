package com.company.easyexam.service;

import com.company.easyexam.mapper.QuestionService;
import com.company.easyexam.model.Ids;
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
import java.util.*;
import java.util.stream.Collectors;

@Service
public  class QuestionServiceImpl implements QuestionService {

    @Autowired
    private QuestionRepository questionRepository;

    @Autowired
    private final MongoTemplate mongoTemplate;

    private enum RatingLabel {
        HIGH_RATING,
        LOW_RATING
    }

    public QuestionServiceImpl(@Autowired final MongoTemplate mongoTemplate) {
        this.mongoTemplate = mongoTemplate;
    }


    @Override
    public List<Question> getCollectionForExam(int size, List<String> tags) {

        List<Question> questionList = questionRepository.findQuestionsByTagsContaining(tags);
        List<Question> questionFilteredByDate = filterQuestionsByDate(questionList);
        List<Question> questionFilteredByDateAndMatchScore = filterQuestionsByMatchScore(questionFilteredByDate,tags);
        List<Question> questionFilteredByDateAndMatchScoreAndRating = filterQuestionsByRating(questionFilteredByDateAndMatchScore,RatingLabel.HIGH_RATING);

        if(size != -1) {
            List<Question> finalList = new ArrayList<>(size);
            if(size<=questionFilteredByDateAndMatchScoreAndRating.size()) {
                for (int index = 0; index < size; index++) {
                    finalList.add(questionFilteredByDateAndMatchScoreAndRating.get(index));
                }
            }
            return finalList;
        }
        else{
            return questionFilteredByDateAndMatchScoreAndRating;
        }
    }

    @Override
    public List<Question> getCollectionForChallenge(int size, List<String> tags) {

        List<Question> questionList = questionRepository.findQuestionsByTagsContaining(tags);
        List<Question> questionFilteredByMatchScore = filterQuestionsByMatchScore(questionList,tags);
        List<Question> questionFilteredByMatchScoreAndRating = filterQuestionsByRating(questionFilteredByMatchScore,RatingLabel.LOW_RATING);

        if(size != -1) {
            List<Question> finalList = new ArrayList<>(size);
            if(size<=questionFilteredByMatchScoreAndRating.size()){
                for (int index = 0; index < size; index++) {
                    finalList.add(questionFilteredByMatchScoreAndRating.get(index));
                }
            }
            return finalList;
        }
        else{
            return questionFilteredByMatchScoreAndRating;
        }

    }

    @Override
    public List<Question> getQuestionsById(List<Ids> ids) {
        List<Question> questionList = new ArrayList<>();
        for (Ids id:ids
             ) {
            Question findedQuestion =  questionRepository.findQuestionById(id.getId());
            questionList.add(findedQuestion);
        }
        return questionList;
    }

    @Override
    public void updateRating(List<Rate> rates) {

        for (Rate rate : rates) {

            Question question = questionRepository.findQuestionById(rate.getId());

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

    @Override
    public  int calculateScore(List<String> questionTags, List<String> tags){
        int score = 0;
        for (String tag1 : questionTags){
            for(String tag2 : tags){
                if(tag1.equals(tag2))
                    score++;
            }
        }
        return score;
    }

    @Override
    public List<Question> filterQuestionsByDate(List<Question> questions) {

        List<Question> newList =  new ArrayList<>();

        for(Question question:questions) {
            Date questionDate = question.getDate();
            Calendar calendar = Calendar.getInstance();
            calendar.setTime(questionDate);
            calendar.add(Calendar.DATE, 30);
            Date questionDatePlus30 = calendar.getTime();

            Date currentDate = new Date();

            if (currentDate.after(questionDatePlus30))
                newList.add(question);
        }
        return newList;
    }

    @Override
    public List<Question> filterQuestionsByMatchScore(List<Question> questions,List<String>tags) {
        Map< Question, Integer> hm = new HashMap<>();
        for(Question question : questions){
            int score = calculateScore(question.getTags(),tags);
            hm.put(question,score);
        }
        Map< Question,Integer> hmSortedByValue = hm.entrySet()
                .stream()
                .sorted(Map.Entry.comparingByValue(Comparator.reverseOrder()))
                .collect(Collectors.toMap(Map.Entry::getKey, Map.Entry::getValue, (e1, e2) -> e1, LinkedHashMap::new));

//        int median = (int) Math.round(hmSortedByValue.size()/2.0);
        int median = hmSortedByValue.size();
        int cont = 0;
        List<Question> finalList =  new ArrayList<>(median);

        for (Map.Entry<Question,Integer> entry : hmSortedByValue.entrySet()){

            if(cont<median) {
                finalList.add(entry.getKey());
                cont++;
            }else{
                break;
            }
        }
        return finalList;
    }

    public List<Question> filterQuestionsByRating(List<Question> questions,RatingLabel label) {
        List<Question> newList = new ArrayList<>();

        if(label==RatingLabel.HIGH_RATING){
            for( Question question : questions){
                if(question.getRating()>3.5)
                    newList.add(question);
            }
        }
        else{
            for( Question question : questions){
                if(question.getRating()<=3.5)
                    newList.add(question);
            }
        }

        return newList;
    }

}
