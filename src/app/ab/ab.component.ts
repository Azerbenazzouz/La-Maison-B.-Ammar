import { Component , Input} from '@angular/core';

@Component({
  selector: 'app-ab',
  templateUrl: './ab.component.html',
  styleUrls: ['./ab.component.css']
})
export class ABComponent {
  @Input() img1 = "";
  @Input() img2 = "";
  @Input() id = 1;
  container: any;
  slider: any;
  // ngOnInit() {
  //   this.container = document.querySelector('.container-x');
  //   this.slider = document.querySelector('.slider');
  //   this.slider.addEventListener('input', (e:any) => {
  //   this.container.style.setProperty('--position', e.target.value+"%");
  //   })
  // }
  value : Number = 50;
  valueChanged(e:any) {
    this.value = e.target.value;
  }
 
  // ngOnChanges() {
  //   this.container = document.querySelector('.container-x');
  //   this.slider = document.querySelector('.slider');
  //   this.slider.addEventListener('input', (e:any) => {
  //   this.container.style.setProperty('--position', e.target.value+"%");
  //   })
  // }

}
