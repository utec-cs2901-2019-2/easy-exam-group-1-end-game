# shellcheck disable=SC2239
#!bin/bash
# Script to compile .tex files 
# You can change the compiler  with the one you want to use.
# author : Jose Chavez

rm src/main/java/com/company/easyexam/media/MyEasyExam.pdf
pdflatex  src/main/java/com/company/easyexam/media/main.tex
rm main.aux
rm main.log
rm src/main/java/com/company/easyexam/media/main.tex
cp src/main/java/com/company/easyexam/media/template.tex src/main/java/com/company/easyexam/media/main.tex
cp main.pdf src/main/java/com/company/easyexam/media/MyEasyExam.pdf
rm main.pdf



