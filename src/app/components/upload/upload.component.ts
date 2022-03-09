import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PessoaService } from 'src/app/services/pessoa.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  file: Set<File>;
  
  constructor(
    private service: PessoaService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onChange(event){
    console.log(event);

    const selectedFile = <FileList>event.srcElement.files;
    this.file = new Set();
    this.file.add(selectedFile[0]);
  }

  upload(){
    this.service.upload(this.file).subscribe(res => {this.service.message(res.body.message)
      this.router.navigate(['pessoas'])}
    , ex =>{
     this.service.message(ex.error.message);
    })
  }
}
