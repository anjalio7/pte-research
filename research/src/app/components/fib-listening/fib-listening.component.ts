import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fib-listening',
  templateUrl: './fib-listening.component.html',
  styleUrls: ['./fib-listening.component.css']
})
export class FibListeningComponent implements OnInit {

  transcript = 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.'

  splitText = new Array();
  objArray = new Array();

  fillPosition = [0, 4, 10];

  answer = new Array();

  constructor() { }

  ngOnInit(): void {
    this.splitText = this.transcript.split(" ")
    this.createObj()
    //this.addPlaceholder(this.fillPosition)
    
  }


  createObj(){
    for (const word of this.splitText){
      let obj = {changed: false, word: word}
      this.objArray.push(obj)
    }

    for (let position of this.fillPosition){
      this.objArray[position].changed = true
    }
    // console.log(this.objArray)
  }

  changeInput(position:any, event:any){
    // console.log(event.target.value)
    let obj = {position: position, value: event.target.value}
    this.answer.push(obj)
    console.log(this.answer)
  }
  

}
