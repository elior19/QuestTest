import {Pipe, PipeTransform} from '@angular/core';

const HOUR: number = 60;
const DAY: number = 24*60;

@Pipe({
  name: 'timeDuration'
})
export class TimeDurationPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    let days = Math.floor(value / DAY);
    let afterDays = value % DAY;
    let hours = Math.floor(afterDays / HOUR);
    let minutes = afterDays % HOUR;

    let answer = '';
    if (days) {
      answer = days + 'd' + ' ' + hours + 'h' + ' ' + minutes + 'm'
    } else if (hours) {
      answer = hours + 'h' + ' ' + minutes + 'm'
    } else {
      answer = minutes + 'm'
    }
    return answer;
  }
}
