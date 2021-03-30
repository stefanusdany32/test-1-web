import { Component } from '@angular/core';
import { FotoService } from '../service/foto.service';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  urlImageStorage  : string[] =[];
  tempfoto : Photo
  constructor(public fotoservice : FotoService,private afStorage : AngularFireStorage) {}
  async ngOnInit(){
    await this.fotoservice.loadfoto();
  }
  
  upload(isi : Photo){
    console.log("uploaded")
    this.tempfoto = isi
  }
  uploadfoto(){
    const imgFilePath = `imgStorage/${this.tempfoto.filepath}`
    console.log(imgFilePath)
    this.afStorage.upload(imgFilePath, this.tempfoto.dataImage).then(() =>{
        this.afStorage.storage.ref().child(imgFilePath).getDownloadURL().then((url) =>{
            this.urlImageStorage.unshift(url)
            console.log(url)
        });
    });
  }
}
export interface Photo{
  filepath : string;
  webviewPath : string;
  dataImage : File
}