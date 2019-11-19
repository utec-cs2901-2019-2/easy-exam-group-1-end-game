# shellcheck disable=SC2239
#!bin/bash
# Script to compile .tex files 
# You can change the compiler  with the one you want to use.
# author : Jose Chavez

# Cleaning dir
rm src/main/java/com/company/easyexam/media/output/MyEasyExam.pdf
rm src/main/java/com/company/easyexam/media/output/Solutions.pdf
rm src/main/java/com/company/easyexam/media/output/Easy_Exam.zip

#Compiling source
pdflatex  src/main/java/com/company/easyexam/media/exam.tex

#Cleaning logs
rm exam.aux
rm exam.log

#Compiling source
pdflatex  src/main/java/com/company/easyexam/media/answer.tex

#Cleaning logs
rm answer.aux
rm answer.log

#Re-making sources
rm src/main/java/com/company/easyexam/media/exam.tex
rm src/main/java/com/company/easyexam/media/answer.tex
cp src/main/java/com/company/easyexam/media/T_exam.tex src/main/java/com/company/easyexam/media/exam.tex
cp src/main/java/com/company/easyexam/media/T_answer.tex src/main/java/com/company/easyexam/media/answer.tex

#Moving & cleaning outputs
cp exam.pdf src/main/java/com/company/easyexam/media/output/MyEasyExam.pdf
cp answer.pdf src/main/java/com/company/easyexam/media/output/Solutions.pdf
rm exam.pdf
rm answer.pdf

#Creating .zip
zip -r Easy_Exam.zip src/main/java/com/company/easyexam/media/output
cp Easy_Exam.zip src/main/java/com/company/easyexam/media
rm  Easy_Exam.zip



