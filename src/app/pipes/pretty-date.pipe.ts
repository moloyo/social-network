import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prettyDate'
})
export class PrettyDatePipe implements PipeTransform {

  transform(date: string, args?: any): string {
    return new Date(date).toDateString();
  }

}
