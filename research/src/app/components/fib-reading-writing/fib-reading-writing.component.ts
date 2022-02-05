import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fib-reading-writing',
  templateUrl: './fib-reading-writing.component.html',
  styleUrls: ['./fib-reading-writing.component.css']
})
export class FibReadingWritingComponent implements OnInit {
  paragraph = "dummy text with choices and choices with dummy text"
  blanksArray = [{ "pos": 2, "word": "with" }, {'pos': 5, 'word': 'choices'}]

  blankChoicesArray = [{ 'pos': 2, "choices": ['is', 'with', 'having', 'as']}, {'pos': 5, 'choices': ['a', 'an', 'the', 'choices']}]


  text = new Array()

  constructor() { }

  ngOnInit(): void {
    this.getSelectOption()
  }

  getSelectOption(){
    for (let i of this.paragraph.split(" ")){
      let obj = {'inp': false, 'word': i, 'choices': []}
      this.text.push(obj)
    }

    for (let i of this.blankChoicesArray){
      this.text[i.pos].inp = true
      this.text[i.pos].choices = i.choices
    }
    console.log(this.text)
  }
}
