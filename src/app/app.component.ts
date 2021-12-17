import { Component, Input } from '@angular/core';
import { TitleService } from './services/title.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private titleService: TitleService) {
  }

  // openPdf() {
  //   this.titleService.generateTitle().subscribe((response) => {
  //     const file = new Blob([response], { type: 'application/pdf' });
  //     const fileURL = URL.createObjectURL(file);
  //     window.open(fileURL);
  //   });
  // }


  showDocument(dni: any) {
    console.log('values: ', dni.value);
    this.titleService.findById(dni.value)
      .subscribe((blob: Blob): void => {
        const file = new Blob([blob], {type: 'application/pdf'});
        const fileURL = URL.createObjectURL(file);
        window.open(fileURL);
      });
  }

  onUrl() {
    let link = `http://localhost:8080/pdf/generate/77077399`;
    window.open(link, "_blank");
  }
  
}
