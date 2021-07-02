import { Pipe, PipeTransform } from '@angular/core';
import { ThemeService } from 'src/app/core/services';

@Pipe({
  name: 'stagecolor',
})
export class StagecolorPipe implements PipeTransform {
  constructor(private readonly _themeService: ThemeService) {}

  public transform(stage: number, defaultColor = 'transparent'): any {
    const colors = this._themeService.getScalePalette(defaultColor);

    return colors[stage];
  }
}
