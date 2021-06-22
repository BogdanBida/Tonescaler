import { Pipe, PipeTransform } from '@angular/core';
import { noteToString } from 'src/app/core/utils/convertors';

@Pipe({
  name: 'notename',
})
export class NotenamePipe implements PipeTransform {
  public transform(value: number, args?: any): any {
    return noteToString(value);
  }
}
