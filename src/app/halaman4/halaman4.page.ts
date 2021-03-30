import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FotoService } from '../service/foto.service';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-halaman4',
  templateUrl: './halaman4.page.html',
  styleUrls: ['./halaman4.page.scss'],
})
export class Halaman4Page implements OnInit {

  constructor(private route: ActivatedRoute, private fotoservice :FotoService,
    private afStorage : AngularFireStorage) { }
  id: any;
  urlImageStorage  : string[] =[];
  ngOnInit() {
  this.route.params.subscribe(async params => {
      this.id = params['fix']; 
      console.log(params['fix'])
      if (this.id == 1){
        this.tampilkandata() 
      }
   
  });
  }
  tampilkandata(){
    var refImg = this.afStorage.storage.ref('imgStorage');
    refImg.listAll().then((res)=>{
      res.items.forEach((itemRef)=>{
        itemRef.getDownloadURL().then(url=>{
          this.urlImageStorage.unshift(url)
          console.log(url)
        });
   
       });
      });
  }
}
