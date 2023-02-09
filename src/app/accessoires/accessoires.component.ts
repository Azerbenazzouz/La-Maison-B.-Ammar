import { Component } from '@angular/core';

@Component({
  selector: 'app-accessoires',
  templateUrl: './accessoires.component.html',
  styleUrls: ['./accessoires.component.css']
})
export class AccessoiresComponent {
  // NavbarComponent
  src = '../../assets/img/selection-accessoire-cheveux-mariee1.jpg';
  path = 1;
  // NavbarComponent
  data = [
    ["../../assets/img/accesoire-cheveux-16-la-maison-lobna-ben-ammar.jpg","../../assets/img/accesoire-cheveux-17-la-maison-lobna-ben-ammar.jpg","../../assets/img/accesoire-cheveux-18-la-maison-lobna-ben-ammar.jpg"],
    ["../../assets/img/accesoire-cheveux-19-la-maison-lobna-ben-ammar.jpg","../../assets/img/accesoire-cheveux-20-la-maison-lobna-ben-ammar.jpg","../../assets/img/accesoire-cheveux-8-la-maison-lobna-ben-ammar.jpg"],
  ];
  datas2 = [
    ["../../assets/img/accessoires-lobna-ben-ammar-1.jpg","../../assets/img/accessoires-lobna-ben-ammar-2.jpg","../../assets/img/accessoires-lobna-ben-ammar-3.jpg"],
    ["../../assets/img/accessoires-lobna-ben-ammar-5.jpg","../../assets/img/accessoires-lobna-ben-ammar-6.jpg","../../assets/img/accessoires-lobna-ben-ammar-8.jpg"],
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
  data4 :any;

  num=3;
  cols = "col-"+12/this.num;
  constructor() {
    if(window.screen.width<576){
      this.num=2;
    }else if(window.screen.width<992){
      this.num=3;
    }
    this.cols = "col-"+12/this.num;
    this.data3 = this.generateArray(this.data,this.num);
    this.data4 = this.generateArray(this.datas2,this.num);

    for (let i = 0; i < this.data3.length; i++) {
      for (let j = 0; j < this.data3[i].length; j++) {
        if(this.data3[i][j]==null){
          this.data3[i].pop();
        }
      }
    }
    for (let i = 0; i < this.data4.length; i++) {
      for (let j = 0; j < this.data4[i].length; j++) {
        if(this.data4[i][j]==null){
          this.data4[i].pop();
        }
      }
    }
  }
}
