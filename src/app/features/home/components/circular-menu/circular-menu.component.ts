import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-circular-menu',
  templateUrl: './circular-menu.component.html',
  styleUrls: ['./circular-menu.component.scss'],
})
export class CircularMenuComponent implements OnInit {
  public isOpen = false;

  public ngOnInit(): void {}

  public toggleClick(): void {
    this.isOpen = !this.isOpen;
  }
}
