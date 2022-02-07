import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-microphone',
  templateUrl: './microphone.component.html',
  styleUrls: ['./microphone.component.css']
})
export class MicrophoneComponent implements OnInit {

  permission = false

  constructor() { }

  ngOnInit(): void {
   


    this.getLocalStream()
    navigator.mediaDevices.ondevicechange = (event) =>{
      console.log('heelo')
      this.permission = !(this.permission)
      console.log('permission on removing microphone', this.permission)
      this.getLocalStream()
    }

    
  }



  getLocalStream(){


    navigator.mediaDevices.getUserMedia({video: false, audio: true}).then( async stream => {
          // console.log(stream)
          const mediaStream = await navigator.mediaDevices.getUserMedia({video: false, audio: true});
          const video = document.createElement('audio');
          video.srcObject = mediaStream;

            // (window as any).localStream = stream;
            // (window as any).localAudio.srcObject = mediaStream;
            /// (window as any).localAudio.autoplay = true;
            // this.permission = true
        }).catch( err => {
          this.permission = false
            console.log("u got an error:" + err)
            if(err == ("NotFoundError: Requested device not found"))
                    alert("Mic not detected")
                    this.permission = false

            if (err == ("NotAllowedError: Permission denied")){

            }
                  
        });

        navigator.mediaDevices.enumerateDevices()
      .then((devices) => {
        devices.forEach((device) => {
          // console.log(device)
          console.log(device.kind + ": " + device.label +
                      " id = " + device.deviceId);
          if (device.kind == 'audioinput'){
            if (!(device.label)){
              this.permission = false
            }
            else{
              this.permission = true
            }
          }
        });
      })
      .catch(function(err) {
        console.log(err.name + ": " + err.message);
      });
      
      
    
  }



}
