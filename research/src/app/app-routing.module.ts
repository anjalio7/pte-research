import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FibListeningComponent } from './components/fib-listening/fib-listening.component';
import { FibReadingWritingComponent } from './components/fib-reading-writing/fib-reading-writing.component';
import { FibReadingComponent } from './components/fib-reading/fib-reading.component';
import { MicrophoneComponent } from './components/microphone/microphone.component';
import { RecordAudioComponent } from './components/record-audio/record-audio.component';
import { ReorderComponent } from './components/reorder/reorder.component';

const routes: Routes = [
  {path: 'fib-listening', component: FibListeningComponent},
  {path: 'fib-reading', component: FibReadingComponent},
  {path: 'fib-reading-writing', component: FibReadingWritingComponent},
  {path: 'reorder', component: ReorderComponent},
  {path: 'microphone', component: MicrophoneComponent},
  {path: 'record', component: RecordAudioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
