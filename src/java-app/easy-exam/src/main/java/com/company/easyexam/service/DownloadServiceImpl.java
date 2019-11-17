package com.company.easyexam.service;

import com.company.easyexam.mapper.DownloadService;
import com.company.easyexam.model.ExamDetails;
import com.company.easyexam.model.Question;
import com.company.easyexam.model.QuestionToCompile;
import org.springframework.stereotype.Service;

import java.io.*;
import java.util.List;

@Service
public class DownloadServiceImpl implements DownloadService {

    @Override
    public void buildFiles(ExamDetails examDetails) {
        buildExam(examDetails);
        buildAnswer(examDetails);
    }

    @Override
    public void executeScript(String pathToScript) {
        readBashScript(pathToScript);
    }

    @Override
    public void buildExam(ExamDetails examDetails) {
        String filePath = "src/main/java/com/company/easyexam/media/exam.tex";
        writeInFile(" "+examDetails.getUniversityName()+" \\par}",filePath);
        writeInFile("\n\\vspace{1cm}",filePath);
        writeInFile("{\n\\scshape\\Large Exam\\par}",filePath);
        writeInFile("\n\\vspace{1.5cm}",filePath);
        writeInFile("\n{\\huge\\bfseries "+ examDetails.getExamName()+" \\par}",filePath);
        writeInFile("\n\\vspace{2cm}",filePath);
        writeInFile("{\\Large\\itshape "+ examDetails.getTeacherName()+ " \\par}",filePath);
        writeInFile("\n\\vfill\n",filePath);
        writeInFile("{\\large \\today\\par}\n" + "\\end{titlepage}\n",filePath);
        writeInFile("\\section*{Problems}\n" +
                "\\begin{enumerate}",filePath);

        for (QuestionToCompile question:examDetails.getQuestionToCompileList()
        ) {
            String item = "\\item "+question.getDescription()+"\n";
            writeInFile(item,filePath);
        }
        writeInFile("\\end{enumerate}\n",filePath);
        writeInFile("\\end{document}",filePath);
    }

    @Override
    public void buildAnswer(ExamDetails examDetails) {
        String filePath = "src/main/java/com/company/easyexam/media/answer.tex";
        writeInFile(" "+examDetails.getUniversityName()+" \\par}",filePath);
        writeInFile("\n\\vspace{1cm}",filePath);
        writeInFile("{\n\\scshape\\Large Solutions\\par}",filePath);
        writeInFile("\n\\vspace{1.5cm}",filePath);
        writeInFile("\n{\\huge\\bfseries "+ examDetails.getExamName()+" \\par}",filePath);
        writeInFile("\n\\vspace{2cm}",filePath);
        writeInFile("{\\Large\\itshape "+ examDetails.getTeacherName()+ " \\par}",filePath);
        writeInFile("\n\\vfill\n",filePath);
        writeInFile("{\\large \\today\\par}\n" + "\\end{titlepage}\n",filePath);
        writeInFile("\\section*{Problems}\n" +
                "\\begin{enumerate}",filePath);

        for (QuestionToCompile question:examDetails.getQuestionToCompileList()
        ) {
            String item = "\\item "+question.getAnswer()+"\n";
            writeInFile(item,filePath);
        }
        writeInFile("\\end{enumerate}\n",filePath);
        writeInFile("\\end{document}",filePath);
    }

    private static void writeInFile(String data,String filePath) {
        File file = new File(filePath);
        FileWriter fr = null;
        try {
            fr = new FileWriter(file,true);
            fr.write(data);
        } catch (IOException e) {
            e.printStackTrace();
        }finally{
            //close resources
            try {
                fr.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }

    private static void readBashScript(String script) {
        try {
            Process proc = Runtime.getRuntime().exec(script); //Whatever you want to execute
            BufferedReader read = new BufferedReader(new InputStreamReader(
                    proc.getInputStream()));
            try {
                proc.waitFor();
            } catch (InterruptedException e) {
                System.out.println(e.getMessage());
            }
            while (read.ready()) {
                System.out.println(read.readLine());
            }
        } catch (IOException e) {
            System.out.println(e.getMessage());
        }
    }
}
