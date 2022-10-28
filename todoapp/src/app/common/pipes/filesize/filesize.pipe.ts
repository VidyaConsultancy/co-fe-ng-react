import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filesize'
})
export class FilesizePipe implements PipeTransform {

  transform(value: unknown, format: string, timezone: number, locale: string): unknown {
    return null;
  }

}
