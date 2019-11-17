package com.company.easyexam.mapper;

import com.company.easyexam.model.Question;

import java.util.List;

public interface DownloadService {
    public abstract void buildFile(List<Question> questionList);
    public abstract void executeScript(String pathToScript);
}
