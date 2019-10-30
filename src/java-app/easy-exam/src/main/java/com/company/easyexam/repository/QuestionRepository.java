package com.company.easyexam.repository;

import com.company.easyexam.model.Question;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface QuestionRepository extends MongoRepository<Question,String> {
    Question findByTags(List<String> tags);
    Question findById(Id id);
    Question save(Question question);
}
