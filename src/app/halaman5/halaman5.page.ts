import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-halaman5',
  templateUrl: './halaman5.page.html',
  styleUrls: ['./halaman5.page.scss'],
})
export class Halaman5Page implements OnInit {

  constructor() { }
  kritik : string = "Sudah cukup baik pengajaran di kelas"
  saran : string = "Mungkin kalau ada materi berbentuk pdf lebih mudah untuk mereview ulang"
  ngOnInit() {
  }

}
