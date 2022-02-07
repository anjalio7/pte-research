import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FibReadingComponent } from './components/fib-reading/fib-reading.component';
import { FibReadingWritingComponent } from './components/fib-reading-writing/fib-reading-writing.component';
import { FibListeningComponent } from './components/fib-listening/fib-listening.component';
import { SkipTimerComponent } from './components/skip-timer/skip-timer.component';
import { ReorderComponent } from './components/reorder/reorder.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MicrophoneComponent } from './components/microphone/microphone.component';
import { RecordAudioComponent } from './components/record-audio/record-audio.component';


@NgModule({
  declarations: [
    AppComponent,
    FibReadingComponent,
    FibReadingWritingComponent,
    FibListeningComponent,
    SkipTimerComponent,
    ReorderComponent,
    MicrophoneComponent,
    RecordAudioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
