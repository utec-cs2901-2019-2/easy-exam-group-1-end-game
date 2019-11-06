package com.company.easyexam.repository;

import com.company.easyexam.model.Question;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface QuestionRepository extends MongoRepository<Question,String> {
    Question findQuestionsByTags(String tags);
    List<Question> findQuestionsByTagsContaining(List<String> tags);


}
