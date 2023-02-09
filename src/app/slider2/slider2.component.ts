import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-slider2',
  templateUrl: './slider2.component.html',
  styleUrls: ['./slider2.component.css']
})
export class Slider2Component {
  @Input() title: string="";
  @Input() colorNumber: number=0;
  @Input() data: string[][]=[[]];
  @Input() cols: string="col-4";
  @Input() id: string="";
  divId: string="";
  colors = ["#ffffff","#d6b8ad"];
  ngOnInit(){
    this.divId="carouselExampleAutoplaying"+this.id;
    console.log(this.divId,this.id);
  }
}
