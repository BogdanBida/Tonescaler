import { Pipe, PipeTransform } from '@angular/core';
import { NoteNumToString } from 'src/app/core/utils/convertors';

@Pipe({
  name: 'notename',
})
export class NotenamePipe implements PipeTransform {
  public transform(value: number, args?: any): any {
    return NoteNumToString(value);
  }
}
