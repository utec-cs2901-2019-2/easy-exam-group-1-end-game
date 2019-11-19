package com.company.easyexam.mapper;

import com.company.easyexam.model.ExamDetails;
import com.company.easyexam.model.Question;

import java.util.List;

public interface DownloadService {
    public abstract void buildFiles(ExamDetails examDetails);
    public abstract void executeScript(String pathToScript);
    public abstract void buildExam(ExamDetails examDetails);
    public abstract void  buildAnswer(ExamDetails examDetails);
}
