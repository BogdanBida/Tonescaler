import { Component } from '@angular/core';

@Component({
  selector: 'app-harps',
  templateUrl: './harps.component.html',
  styleUrls: ['./harps.component.scss'],
})
export class HarpsComponent {
  public notes: number[] = [];
}
