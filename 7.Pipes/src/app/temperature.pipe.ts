import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temp'
})
export class TemperaturePipe implements PipeTransform {
    transform(
        value: string | number, 
        inputType: 'cel' | 'fah', 
        outputType?: 'cel' | 'fah') 
    {
        let val: number;
        val = (typeof value === 'string') ? parseFloat(value) : value;

        let outPutTemp: number;
        if (inputType === 'cel' && outputType === 'fah')
            outPutTemp = val * (9 / 5) + 32;
        else if (inputType === 'fah' && outputType === 'cel')
            outPutTemp = (val - 32) * (5 / 9);
        else
            outPutTemp = val;

        let symbol: '°C' | '°F';
        if (!outputType)
            symbol = inputType === 'cel' ? '°C' : '°F'; 
        else
            symbol = outputType === 'cel' ? '°C' : '°F';


        return `${outPutTemp.toFixed(2)} ${symbol}`;
    }

}