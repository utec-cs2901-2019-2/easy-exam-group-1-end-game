package com.company.easyexam.web;

import com.company.easyexam.mapper.DownloadService;
import com.company.easyexam.mapper.QuestionService;
import com.company.easyexam.model.Ids;
import com.company.easyexam.model.Question;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.util.List;

@RestController
@RequestMapping("/download")
public class DownloadController {

    @Autowired
    QuestionService questionService;

    @Autowired
    DownloadService downloadService;

    @PostMapping("exam")
    public ResponseEntity<InputStreamResource> downloadFile(@RequestBody List<Ids> list) throws FileNotFoundException {
        List<Question> questions = questionService.getQuestionsById(list);

        downloadService.buildFile(questions);

        downloadService.executeScript("src/main/java/com/company/easyexam/media/compile.sh");

        String filePath = "src/main/java/com/company/easyexam/media/MyEasyExam.pdf";

        File file = new File(filePath);
        HttpHeaders respHeaders = new HttpHeaders();
        MediaType mediaType = MediaType.parseMediaType("application/pdf");
        respHeaders.setContentType(mediaType);
        respHeaders.setContentLength(file.length());
        respHeaders.setContentDispositionFormData("attachment", file.getName());
        InputStreamResource isr = new InputStreamResource(new FileInputStream(file));
        return new ResponseEntity<>(isr, respHeaders, HttpStatus.OK);

    }

}
