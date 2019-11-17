package com.company.easyexam.mapper;

import com.company.easyexam.model.ExamDetails;
import com.company.easyexam.model.Question;

import java.util.List;

public interface DownloadService {
    public abstract void buildFile(ExamDetails examDetails);
    public abstract void executeScript(String pathToScript);
}
