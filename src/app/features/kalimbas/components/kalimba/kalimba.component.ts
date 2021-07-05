import { AfterViewInit, Component, Input } from '@angular/core';

@Component({
  selector: 'app-kalimba',
  templateUrl: './kalimba.component.html',
  styleUrls: ['./kalimba.component.scss'],
})
export class KalimbaComponent implements AfterViewInit {
  @Input() public tongues: number[] | null = [44, 46, 48, 49, 51, 53];

  public ngAfterViewInit(): void {}
}
