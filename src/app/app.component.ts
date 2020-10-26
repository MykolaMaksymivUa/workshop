import { Component, ElementRef, ViewChild, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('appTitle') appTitle: ElementRef<HTMLBaseElement>;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // теперь вы знаете, что тут можно использовать Renderer2
    this.appTitle.nativeElement.innerText = 'Angular Workshop';
  }
}
