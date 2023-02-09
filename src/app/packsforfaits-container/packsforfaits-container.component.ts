import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-packsforfaits-container',
  templateUrl: './packsforfaits-container.component.html',
  styleUrls: ['./packsforfaits-container.component.css']
})
export class PacksforfaitsContainerComponent {
  @Input() title="";
  @Input() packs= [{title:"",src:""}];
}
