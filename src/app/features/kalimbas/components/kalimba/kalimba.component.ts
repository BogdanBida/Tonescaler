import { AfterViewInit, Component, Input } from '@angular/core';

@Component({
  selector: 'app-kalimba',
  templateUrl: './kalimba.component.html',
  styleUrls: ['./kalimba.component.scss'],
})
export class KalimbaComponent implements AfterViewInit {
  @Input() public tongues: number[] | null = [];

  public ngAfterViewInit(): void {}
}
