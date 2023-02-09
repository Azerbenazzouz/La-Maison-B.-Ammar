import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-packforfait-item',
  templateUrl: './packforfait-item.component.html',
  styleUrls: ['./packforfait-item.component.css']
})
export class PackforfaitItemComponent {
  @Input() title = "";
  @Input() src = "";
}
