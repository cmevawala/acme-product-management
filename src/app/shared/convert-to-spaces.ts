import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: "ConvertToSpaces"
})
export class ConvertToSpacesPipe {
    transform(value: string, char: string): string {
        return value.replace(char, " ");
    }
};