import { Component } from '@angular/core';

@Component({
  selector: 'app-bride-by-rim',
  templateUrl: './bride-by-rim.component.html',
  styleUrls: ['./bride-by-rim.component.css']
})
export class BrideByRimComponent {
  // NavbarComponent
  src = '../../assets/videos/bride by lobna ben ammar.mp4';
  path = 1;
  // NavbarComponent
  data = [
    ["../../assets/img/mariee-by-rym-la-maison-lobna-ben-ammar-fashion-make-up-artist-mariee-202.jpg","../../assets/img/mariee-by-rym-la-maison-lobna-ben-ammar-fashion-make-up-artist-mariee-202-10.jpg","../../assets/img/mariee-by-rym-la-maison-lobna-ben-ammar-fashion-make-up-artist-mariee-202-2.jpg","../../assets/img/mariee-by-rym-la-maison-lobna-ben-ammar-fashion-make-up-artist-mariee-202-3.jpg"],
    ["../../assets/img/mariee-by-rym-la-maison-lobna-ben-ammar-fashion-make-up-artist-mariee-202-4.jpg","../../assets/img/mariee-by-rym-la-maison-lobna-ben-ammar-fashion-make-up-artist-mariee-202-5.jpg","../../assets/img/mariee-by-rym-la-maison-lobna-ben-ammar-fashion-make-up-artist-mariee-202-6.jpg","../../assets/img/mariee-by-rym-la-maison-lobna-ben-ammar-fashion-make-up-artist-mariee-202-7.jpg"],
    ["../../assets/img/mariee-by-rym-la-maison-lobna-ben-ammar-fashion-make-up-artist-mariee-202-8.jpg","../../assets/img/mariee-by-rym-la-maison-lobna-ben-ammar-fashion-make-up-artist-mariee-202-9.jpg","../../assets/img/mariee-by-rym-la-maison-lobna-ben-ammar-fashion-make-up-artist-mariee-2021.jpg","../../assets/img/mariee-by-rym-la-maison-lobna-ben-ammar-fashion-make-up-artist-mariee-202-6.jpg"],
  ];


  generateArray = (data:string[][]=[[]],num:number) =>{
    var data2 :string[][]=[[]];
    var data1 :string[]=[];
    for (var i = 0; i < data.length; i++) {
      for (var j = 0; j < data[i].length; j++) {
        data1.push(data[i][j]);
      }
    }

    var rows:number = (data1.length)/num;

    for (var i = 0; i < rows; i++) {
      data2.push([]);
      for (var j = 0; j < num ; j++) {
        data2[i].push(data1[i*num+j]);
      }
      if(data2[i][j]==""){
        data2[i].pop();
      }
    }
    data2.pop();
    return data2;
  }
  data3 :any;
  num=4;
  cols = "col-"+12/this.num;
  constructor() {
    if(window.screen.width<576){
      this.num=2;
    }else if(window.screen.width<992){
      this.num=3;
    }
    this.cols = "col-"+12/this.num;
    this.data3 = this.generateArray(this.data,this.num);

    for (let i = 0; i < this.data3.length; i++) {
      for (let j = 0; j < this.data3[i].length; j++) {
        if(this.data3[i][j]==null){
          this.data3[i].pop();
        }
      }
    }

  }
}
