# shellcheck disable=SC2239
#!bin/bash
# Script to compile .tex files 
# You can change the compiler  with the one you want to use.
# author : Jose Chavez

# Cleaning dir
rm /opt/easyexam/media/output/MyEasyExam.pdf
rm /opt/easyexam/media/output/Solutions.pdf
rm /opt/easyexam/media/output/Easy_Exam.zip

echo hola
#Compiling source
pdflatex  /opt/easyexam/media/exam.tex

#Cleaning logs
rm exam.aux
rm exam.log

#Compiling source
pdflatex  /opt/easyexam/media/answer.tex

#Cleaning logs
rm answer.aux
rm answer.log

#Re-making sources
rm /opt/easyexam/media/exam.tex
rm /opt/easyexam/media/answer.tex
cp /opt/easyexam/media/T_exam.tex /opt/easyexam/media/exam.tex
cp /opt/easyexam/media/T_answer.tex /opt/easyexam/media/answer.tex

#Moving & cleaning outputs
cp exam.pdf /opt/easyexam/media/output/MyEasyExam.pdf
cp answer.pdf /opt/easyexam/media/output/Solutions.pdf
rm exam.pdf
rm answer.pdf

#Creating .zip
zip -r Easy_Exam.zip /opt/easyexam/media/output
cp Easy_Exam.zip /opt/easyexam/media
rm  Easy_Exam.zip



