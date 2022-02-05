import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fib-reading',
  templateUrl: './fib-reading.component.html',
  styleUrls: ['./fib-reading.component.css']
})
export class FibReadingComponent implements OnInit {
  choicesArray = ['brought', 'pecularities', 'w3schools', 'opposite']
  blanksArray = [{pos: 5, word: 'pecularities'}, {pos: 35, word: 'brought'}]

  questionText = "In African society, the gender pecularities and patriarchal construct remain the bane across virtually all spheres of life in the society. There is a greater level of gender sensitivity to the extent that boys are brought up to see themselves as superior sex to girls."

  text = new Array()

  position: any

  newchoicesArray = this.choicesArray.map((x:any) => x = {'word': x, 'dropped': false, 'pos': this.position})
  answerArray = new Array()

  constructor() { }

  ngOnInit(): void {
    this.getBlanks()
  }

  getBlanks(){
    this.questionText.split(" ").forEach((word:any) =>{
      let obj = {inp: false, word: word, dropped: false}
      this.text.push(obj)
    })
    // console.log(this.text)
    this.blanksArray.forEach((x:any) =>{
      this.text[x.pos].inp = true
    })
    console.log(this.text)
  }

  drag(event:any){
    event.dataTransfer.setData("Text", event.target.id)
  }

  drop(event:any){
    event.preventDefault()
    var data = event.dataTransfer.getData("Text")
   
    console.log('parent node', event.target.parentNode)
    event.target.appendChild(document.getElementById(data))

    var matches = data.replace(/\D/g, '')
    this.newchoicesArray[matches].dropped = !(this.newchoicesArray[matches].dropped)
    this.newchoicesArray[matches].pos = event.target.dataset.position

  }

  allowDrop(event:any){
    event.preventDefault()
  }


  getValues(){
    let a = this.newchoicesArray.filter((x:any) => x.dropped == true)

    a.forEach(x =>{
      let obj = {pos: x.pos, word: x.word}
      this.answerArray.push(obj)
    })

    console.log(this.answerArray)
  }
}
