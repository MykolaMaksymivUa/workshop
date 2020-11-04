import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(array: any[], field: string, descending: boolean = true): any[] {
    const sortedArr = array.sort((a, b) => {
      return a[field] > b[field] ? -1 : 1;
    });

    return descending ? sortedArr : sortedArr.reverse();
  }

}
