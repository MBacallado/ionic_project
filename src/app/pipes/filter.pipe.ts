  
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {
    //search a word by letters
    transform(value: any, arg: any): any {
        const searchCategoria = [];
        for (const rec of value) {
            if ( rec.categoria.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
                searchCategoria.push(rec);
            }
        }
        return searchCategoria;
    }
};