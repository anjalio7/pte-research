import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-record-audio',
  templateUrl: './record-audio.component.html',
  styleUrls: ['./record-audio.component.css']
})
export class RecordAudioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  recordAudio(){
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      console.log('getUserMedia supported.');
      navigator.mediaDevices.getUserMedia (
         // constraints - only audio needed for this app
         {
            audio: true
         })
   
         // Success callback
         .then(function(stream) {
           console.log('yipeee')
           const mediaRecorder = new MediaRecorder(stream);

           mediaRecorder.start();
            console.log(mediaRecorder.state);
            console.log("recorder started");
            let chunks = new Array()

            mediaRecorder.ondataavailable = function(e) {
              chunks.push(e.data);
            }
            console.log(chunks)
         })
   
         // Error callback
         .catch(function(err) {
            console.log('The following getUserMedia error occurred: ' + err);
         }
      );
   } else {
      console.log('getUserMedia not supported on your browser!');
   }
  }

  getChunks(mediaRecorder:any){

  }
}
