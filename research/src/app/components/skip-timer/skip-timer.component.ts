import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skip-timer',
  templateUrl: './skip-timer.component.html',
  styleUrls: ['./skip-timer.component.css']
})
export class SkipTimerComponent implements OnInit {
  show = true
  time = 10
  timer = ''
  constructor() { }

  ngOnInit(): void {
    let timer = setInterval(() => {
      this.time--;
      if (this.time < 10){
        this.timer = '00:0' + this.time
      }
      else{
        this.timer = '00:' + this.time
      }      
      if(this.time <= 0){
        clearInterval(timer)
        this.show = false
      }
    }, 1000)
  
  }

  skipTimer(){
    this.show = false
  }

}
