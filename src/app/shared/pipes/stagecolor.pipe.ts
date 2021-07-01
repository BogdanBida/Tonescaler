import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stagecolor',
})
export class StagecolorPipe implements PipeTransform {
  public transform(stage: number, defaultColor = 'transparent'): any {
    const colors = [
      defaultColor,
      'red',
      'orange',
      'yellow',
      'green',
      'skyblue',
      'blue',
      'magenta',
    ];

    return colors[stage];
  }
}
