import { 
  Component, 
  OnInit, 
  Input, 
  OnChanges, 
  SimpleChanges, 
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() show: boolean
  @Output() configuration: EventEmitter<any> = new EventEmitter()

  constructor() { }

  ngOnInit() {
    console.log('ChildComponent::ngOnInit')
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ChildComponent::ngOnChanges ', changes)
    if (this.show) this.showModal()
  }

  public showModal(): void {
    console.log('ChildComponent::showModal')
    this.configuration.emit('done')
  }
}
