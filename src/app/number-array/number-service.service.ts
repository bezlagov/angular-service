import { Injectable } from "@angular/core";

@Injectable()
export class NumberService {
    numberList: number[] = [42, 65, 76, 234, 1, 64, 233, 88, 422, 222, 11111, 9];

    getList(): number[] {
        return this.numberList;
    }

    getMax(): number {
        return Math.max(...this.numberList);
    }

    getMin(): number {
        return Math.min(...this.numberList);
    }
    getDesc(): number[] {
        let tempList = [...this.numberList];
        return tempList.sort((a, b) => b - a);
    }
    getIncr(): number[] {
        let tempList = [...this.numberList];
        return tempList.sort((a, b) => a - b);
    }
}