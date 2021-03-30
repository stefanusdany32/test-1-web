import { Component } from '@angular/core';
import { FotoService } from '../service/foto.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(  private afStorage : AngularFireStorage,public fotoService : FotoService,
    public router : Router) {}
  urlImageStorage  : string[] =[];
  namafoto : string[] = []
  private object : stat;
  private myarray: any[] = new Array<object>();
  async ngOnInit() {
    await this.fotoService.loadfoto();
    var refImg = this.afStorage.storage.ref('imgStorage');
    refImg.listAll().then((res)=>{
      var temp : stat
      res.items.forEach((itemRef)=>{
        itemRef.getDownloadURL().then(url=>{
          this.urlImageStorage.unshift(url)
        //  temp.urlval(url)
          
        });
        itemRef.getMetadata().then(meta=>{
          this.namafoto.unshift(meta.name)
       //  temp.namaval(meta.name)
          console.log(meta.name)
        })
        //this.myarray.unshift(temp)
        console.log(this.myarray)
       });
      
      });
    
 }
 pindah(){
  this.router.navigate(['/halaman4', 1]);
 }
}
export class stat{
  url : string;
  nama : string;
  set urlval(val){
    this.url =  val
  }
  set namaval(val){
    this.nama =  val
  }
}

