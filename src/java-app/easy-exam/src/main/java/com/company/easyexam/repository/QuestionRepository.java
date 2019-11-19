package com.company.easyexam.repository;

import com.company.easyexam.model.Question;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Date;
import java.util.List;

public interface QuestionRepository extends MongoRepository<Question,String> {
    Question findQuestionById(String id);
    List<Question> findQuestionsByTagsContaining(List<String> tags);

}
