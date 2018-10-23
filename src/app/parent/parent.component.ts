import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  public show: boolean = false
  
  constructor() { }

  ngOnInit() {
    console.log('ParentComponent::ngOnInit')
  }

  public showChildModal(): void {
    console.log('ParentComponent::showChildModal')
    this.show = true
  }

  public configure(event: any) {
    console.log('ParentComponent::configure ', event)
    setTimeout(() => { this.show = false }, 1000)
  }
}
