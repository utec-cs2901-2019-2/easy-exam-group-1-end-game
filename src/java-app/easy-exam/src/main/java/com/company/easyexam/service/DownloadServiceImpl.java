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
    public void buildFile(ExamDetails examDetails) {
        writeInFile(" "+examDetails.getUniversityName()+" \\par}");
        writeInFile("\n\\vspace{1cm}");
        writeInFile("{\n\\scshape\\Large Exam\\par}");
        writeInFile("\n\\vspace{1.5cm}");
        writeInFile("\n{\\huge\\bfseries "+ examDetails.getExamName()+" \\par}");
        writeInFile("\n\\vspace{2cm}");
        writeInFile("{\n\\Large\\itshape "+ examDetails.getTeacherName()+ " \\par}");
        writeInFile("\\vfill");
        writeInFile("{\\large \\today\\par}\n" + "\\end{titlepage}");
        writeInFile("\\section*{Problems}\n" +
                "\\begin{enumerate}");

        for (QuestionToCompile question:examDetails.getQuestionToCompileList()
             ) {
            String item = "\\item "+question.getDescription()+"\n";
            writeInFile(item);
        }
        writeInFile("\\end{enumerate}\n");
        writeInFile("\\end{document}");

    }

    @Override
    public void executeScript(String pathToScript) {
        readBashScript(pathToScript);
    }

    private static void writeInFile(String data) {
        File file = new File("src/main/java/com/company/easyexam/media/main.tex");
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

    public static void readBashScript(String script) {
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
