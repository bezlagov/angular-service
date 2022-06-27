import { Component, OnInit } from '@angular/core';
import { NumberService } from './number-service.service';

@Component({
  selector: 'app-number-array',
  templateUrl: './number-array.component.html',
  styleUrls: ['./number-array.component.css'],
  providers: [NumberService]

})
export class NumberArrayComponent implements OnInit {

  result: string = "";
  constructor(private numberService: NumberService) { }

  ngOnInit(): void {
  }

  getList(){
    return this.numberService.getList().join();
  }

  onGetMax() {
    this.result = this.numberService.getMax().toString();
  }
  onGetMin() {
    this.result = this.numberService.getMin().toString();

  }
  onGetIncr() {
    this.result = this.numberService.getIncr().join();
  }
  onGetDesc() {
    this.result = this.numberService.getDesc().join();
  }
}
