import { Component } from '@angular/core';
import { ServicesService } from './services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AudioProject';
  constructor (private servicesservice:ServicesService){}

  
  files: Array<any> = [
    { name: "First Song", artist: "Inder" },
    { name: "Second Song", artist: "You" },
  ];
  state;
  currentFile: any = {};
  ServicesService: any;

  isFirstPlaying() {
    return false;
  }
  isLastPlaying() {
    return true;
  }

  onSliderChangeEnd(change) {
    this.ServicesService.seekTo(change.value);
  }

  openFile(file, index) {
    this.currentFile = { index, file };
    this.ServicesService.stop();
  
  }

  previous() {
    const index = this.currentFile.index - 1;
    const file = this.files[index];
    this.openFile(file, index);
  }

  next() {
    const index = this.currentFile.index + 1;
    const file = this.files[index];
    this.openFile(file, index);
  }

  stop() {
    this.ServicesService.stop();
  }
 
  play() {
    this.ServicesService.play();
  }

  pause() {
    this.ServicesService.pause();
  }

  playStream(url) {
    this.ServicesService.playStream(url).subscribe((events) => {
      // listening for fun here
    });
  }
}

