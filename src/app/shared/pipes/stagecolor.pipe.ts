import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stagecolor',
})
export class StagecolorPipe implements PipeTransform {
  public transform(stage: number, args?: any): any {
    const colors = [
      'transparent',
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
