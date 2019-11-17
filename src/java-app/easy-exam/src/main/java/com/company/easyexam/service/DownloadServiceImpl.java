package com.company.easyexam.service;

import com.company.easyexam.mapper.DownloadService;
import com.company.easyexam.model.Question;
import org.springframework.stereotype.Service;

import java.io.*;
import java.util.List;

@Service
public class DownloadServiceImpl implements DownloadService {
    @Override
    public void buildFile(List<Question> questionList) {
        for (Question question:questionList
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
