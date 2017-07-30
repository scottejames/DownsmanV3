import {Component,Input,Output,EventEmitter} from '@angular/core'
import {IEntry} from "../../../data-services/entry.model";

@Component ({
    selector : 'entry-thumbnail',
    template : `
      <md-card class="background-primary-color white-text" [routerLink]="['/viewEntry',entry.id]" color="primary" class='entry-thumbnail-class'>
        <md-card-header>
            <md-card-title>Team Name: {{entry?.team?.name}}</md-card-title>
        </md-card-header>
        <md-card-content>

        <p> Hike Class: {{entry?.class}} </p>
        </md-card-content>

    </md-card>
`,
    styles: [`
  .pad-left { margin-left : 10px; }
  .well div {color: #bbb; }
  .thumbnail {min-height: 210px; }
  `]

})
export class EntryThumbnailComponent {
    @Input() entry : IEntry

    ngOnInit(){
        console.log(this.entry);
    }

}
