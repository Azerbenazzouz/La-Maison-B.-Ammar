import { Component } from '@angular/core';

@Component({
  selector: 'app-coiffure',
  templateUrl: './coiffure.component.html',
  styleUrls: ['./coiffure.component.css']
})
export class CoiffureComponent {
// NavbarComponent
src = '../../assets/img/selection-accessoire-cheveux-mariee2.jpg';
path = 3;
// NavbarComponent
data = [
  ["../../assets/img/coiffure-la-maison-lobna-ben-ammar-2-400x600.jpg","../../assets/img/coiffure-la-maison-lobna-ben-ammar-4-400x600.jpg","../../assets/img/coiffure-la-maison-lobna-ben-ammar-6-400x600.jpg","../../assets/img/coiffure-cheveux-la-maison-lobna-ben-ammar-400x600.jpg"],
  ["../../assets/img/coiffure-cheveux-mariee-5-la-maison-lobna-ben-ammar.jpg","../../assets/img/coiffure-cheveux-la-maison-lobna-ben-ammar-2-400x600.jpg","../../assets/img/coiffure-cheveux-la-maison-lobna-ben-ammar-3-400x600.jpg","../../assets/img/coiffure-cheveux-la-maison-lobna-ben-ammar-4-400x600.jpg"],
  ["../../assets/img/coiffure-cheveux-la-maison-lobna-ben-ammar-5-400x600.jpg","../../assets/img/coiffure-cheveux-la-maison-lobna-ben-ammar-3-1-400x600.jpg","../../assets/img/coiffure-cheveux-la-maison-lobna-ben-ammar-3-1-400x600.jpg","../../assets/img/la-maison-lobna-ben-ammar-coiffure-cheveux-400x600%20(1).jpg"],

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
