import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TitleService } from './services/title.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  form: FormGroup;
  errorMessage = "";

  showModal() {
    Swal.fire( 'DNI no encontrado', '', 'error');
  }

  constructor(private titleService: TitleService) {
    this.buildForm();
  }
  ngOnInit() {
  }



    showDocument(dni: any) {
      console.log('values: ', dni.value);
      this.titleService.findByDni(dni.value)
        .subscribe((blob: Blob): void => {
          const file = new Blob([blob], {type: 'application/pdf'});
          const fileURL = URL.createObjectURL(file);
          window.open(fileURL);
        },
        
        error => this.showModal()
        );
        
    }

    private buildForm() {
      this.form = new FormGroup({
        dni: new FormControl('', [Validators.required]),
      });
  
      this.form.valueChanges
      .subscribe(value => {
        console.log(value);
      });
    }
  
}
