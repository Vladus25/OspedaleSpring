import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uniquePaziente'
})
export class UniquePazientePipe implements PipeTransform {

  transform(array: any[], prop: string): any[] {
    const uniqueArray = array.reduce((accumulator, item) => {
      const key = item[prop];
      if (!accumulator[key]) {
        accumulator[key] = item;
      }
      return accumulator;
    }, {});
    return Object.values(uniqueArray);
  }

}
