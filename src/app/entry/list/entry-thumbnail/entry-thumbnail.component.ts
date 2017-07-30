import {Component,Input,Output,EventEmitter} from '@angular/core'
import {IEntry} from "../../../data-services/entry.model";

@Component ({
    selector : 'entry-thumbnail',
    template : `
      <md-card color="primary" class='entry-thumbnail-class'>
        <md-card-header>
            <md-card-title><h2>{{entry?.team?.name}}</h2></md-card-title>
        </md-card-header>
        <md-card-content>
            <div class="thumb-background">
                <div class="row">
                    <div class="col-md-4">
                        Class: 
                    </div>
                    <div class="col-md-8">
                        {{entry?.class}}
                    </div>
                    <div class="col-md-4">
                        Start: 
                    </div>
                    <div class="col-md-8">
                        {{entry?.prefStartTime}}
                    </div>
                </div>
            </div>
        </md-card-content>
        <md-card-actions layout="row" layout-align="end center">
            <button md-raised-button [routerLink] = "['/viewEntry',entry.id]" color="accent">Edit</button>
        </md-card-actions>
    </md-card>
`

})
export class EntryThumbnailComponent {
    @Input() entry : IEntry

    ngOnInit(){
        console.log(this.entry);
    }

}
