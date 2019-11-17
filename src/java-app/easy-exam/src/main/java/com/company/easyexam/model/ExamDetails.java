package com.company.easyexam.model;

import com.fasterxml.jackson.annotation.JsonAutoDetect;

import java.util.List;

@JsonAutoDetect
public class ExamDetails {
    private List<QuestionToCompile> questionToCompileList;
    private String teacherName;
    private String examName;
    private String universityName;


    public ExamDetails(List<QuestionToCompile> questionToCompileList, String teacherName, String examName, String universityName) {
        this.questionToCompileList = questionToCompileList;
        this.teacherName = teacherName;
        this.examName = examName;
        this.universityName = universityName;
    }

    public List<QuestionToCompile> getQuestionToCompileList() {
        return questionToCompileList;
    }

    public void setQuestionToCompileList(List<QuestionToCompile> questionToCompileList) {
        this.questionToCompileList = questionToCompileList;
    }

    public String getTeacherName() {
        return teacherName;
    }

    public void setTeacherName(String teacherName) {
        this.teacherName = teacherName;
    }

    public String getExamName() {
        return examName;
    }

    public void setExamName(String examName) {
        this.examName = examName;
    }

    public String getUniversityName() {
        return universityName;
    }

    public void setUniversityName(String universityName) {
        this.universityName = universityName;
    }
}
