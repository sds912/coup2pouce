import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-job-page',
  templateUrl: './job-page.component.html',
  styleUrls: ['./job-page.component.scss']
})
export class JobPageComponent implements OnInit {

  cvForm!: FormGroup;
  file: any = null;

  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {
    this.cvForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]]
    })
  }

  upload(event: any){
    this.file = event.files[0]
    console.log(this.file)
  }

  onSubmit(){
    console.log(this.cvForm.value)
  }

}
