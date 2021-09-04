import { Iquestion, Ianswer } from './../interface/iquestion';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {
  // Declare Properties, Objects, & Arrays
  currentQues :any ;
  index= 0 ;
  showN = true;
  showP = false;
  form: FormGroup;

  fullName= localStorage.getItem("fullName");
  Email=  localStorage.getItem("email");
  birthDate= new Date ( localStorage.getItem("birthDate")).getFullYear();
  currentYear = new Date().getFullYear();
  age = this.currentYear - (this.birthDate);

  answer: Ianswer  = {
    id: 0 ,
    answer: "",
    questionNo: 0
  };

  questions : Iquestion [] = [{
    id : 1 ,
    question : "What does HTML stand for?",
    correctAnswer : 2 ,
  },{
    id : 2 ,
    question : "State whether the given statement is true or false. !DOCTYPE is case sensitive”",
    correctAnswer : 5 ,
  },
  {
    id : 3 ,
    question : "State whether the given statement is true or false. “We can intermix XHTML and HTML 4.01 documents”",
    correctAnswer : 6 ,
  },
  {
    id : 4 ,
    question : "State true or false. It is faster to render HTML and CSS than to interpret and execute JavaScript.",
    correctAnswer : 5 ,
  }
   
  ];
   

  answers : Ianswer [] = [
    {
      id:1,
      answer : " Hyperlinks and Text Markup Language",  
      questionNo: 1
    },{
      id:2,
      answer : " Hyper Text Markup Language",
      questionNo: 1
    },{
      id:3,
      answer : " Hyperlinks and Text Markup Language", 
      questionNo: 1
    }
    ,{
      id:5,
      answer : "true", 
      questionNo: 2
    },
    {
      id:6,
      answer : "false", 
      questionNo: 2
    }
  ];

  constructor(private formBuilder: FormBuilder,private router: Router) {
    
    
   }

  ngOnInit(): void {
  }

  onSubmit(){

  }

 

 
  
}
