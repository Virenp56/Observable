import { Component, ElementRef, OnInit, ViewChild, Renderer2 } from '@angular/core';
import { of } from 'rxjs/internal/observable/of';
import { from } from 'rxjs/internal/observable/from';
import { map } from 'rxjs/internal/operators/map';
import { mergeAll } from 'rxjs/internal/operators/mergeAll';
import { delay } from 'rxjs/internal/operators/delay';
import { mergeMap } from 'rxjs/internal/operators/mergeMap';
import { ObservableService } from './Shared Services/observable.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Obsevable';
  public array = ["Viren", "Karan", "Raj"];
  public observableData = from(this.array);

  constructor(private observableService: ObservableService) { }
  ngOnInit(): void {

    // map
    this.observableData.pipe(map(res => this.getData(res))).subscribe(data => data.subscribe(data => this.observableService.printList('map', data)))

    // map + mergeAll
    this.observableData.pipe(map(res => this.getData(res)), mergeAll(), delay(2000)).subscribe(data => { this.observableService.printList('mergeAll', data) })

    //MergeMap
    this.observableData.pipe(mergeMap(res => this.getData(res)), delay(2000)).subscribe(data => { this.observableService.printList('mergeMap', data) })

  }
  getData(data: any) {
    return of(data)
  }
}
