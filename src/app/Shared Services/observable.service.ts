import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ObservableService {

  constructor() { }

  printList(id: any, data: any) {
    let list = document.createElement("li");
    list.appendChild(document.createTextNode(data))
    document.getElementById(id)?.appendChild(list)
  }
}
