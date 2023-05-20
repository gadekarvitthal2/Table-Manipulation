import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure:false
})
export class FilterPipe implements PipeTransform {
  transform(value: any, filterBy: string|null): any[] {
  filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
    return filterBy ? value.filter((product: any) =>
        product.employee_name.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
  }

}
