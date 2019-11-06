package com.company.easyexam.mapper;

import com.company.easyexam.model.Question;
import com.company.easyexam.repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Optional;

public interface QuestionService {


    public abstract List<Question> getCollection( int size ,List<String> tags);


}
