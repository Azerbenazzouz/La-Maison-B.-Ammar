import { Component } from '@angular/core';

@Component({
  selector: 'app-bride-by-ahlem',
  templateUrl: './bride-by-ahlem.component.html',
  styleUrls: ['./bride-by-ahlem.component.css']
})
export class BrideByAhlemComponent {
  // NavbarComponent
  src = '../../assets/videos/bride by lobna ben ammar.mp4';
  path = 1;
  // NavbarComponent
  data = [
        ["../../assets/img/bride-by-ahlem-la-maison-lobna-ben-ammar-make-up-by-lobna.jpg","../../assets/img/bride-by-ahlem-la-maison-lobna-ben-ammar-make-up-by-lobna-2.jpg","../../assets/img/bride-by-ahlem-la-maison-lobna-ben-ammar-make-up-by-lobna-3.jpg"],
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
        console.log("pop");
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
    console.log(this.data[0].length);
    if(window.screen.width<576){
      this.num=2;
    }else if(window.screen.width<992){
      this.num=3;
    }
    this.cols = "col-"+12/this.num;
    this.data3 = this.generateArray(this.data,this.num);

    for (let i = 0; i < this.data3.length; i++) {
      for (let j = 0; j <= this.data3[i].length; j++) {
        console.table(this.data3[i][j]);
        if(this.data3[i][j]==null){
          this.data3[i].pop();
        }

      }
    }
    
  }
}
