import { Component, OnInit } from '@angular/core';
import { ListService } from './list-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [ListService],
})
export class ListComponent implements OnInit {

  listToDisplay: string[] = [];
  filter: string = "";
  constructor(private listService: ListService) {
    this.listToDisplay = listService.getList();
  }

  ngOnInit(): void {
  }

  getList(): string[] {
    return this.listService.getList();
  }

  handleInput() {
    this.listToDisplay = this.setFiltration(this.filter);
  }

  private setFiltration(key: string): string[] {
    return this.listService.setFiltration(key);
  }
}
