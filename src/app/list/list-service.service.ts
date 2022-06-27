import { Injectable } from "@angular/core";

@Injectable()
export class ListService {
    list: string[] = [
        "Apple",
        "Exxon",
        "Kodak",
        "Xerox",
        "Verizon",
        "Adidas",
        "Google",
        "Pixar",
    ];

    getList(): string[] {
        return this.list;
    }

    setFiltration(key: string): string[] {
        return this.list.filter(x => x.toLocaleLowerCase().includes(key.toLocaleLowerCase()));
      }
}