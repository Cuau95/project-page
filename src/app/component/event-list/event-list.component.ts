import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {

  dataSource;
  displayedColumns: string[] = ['nombreFeria', 'direccionEvento', 'fechaInicio', 'fechaFin'];

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.eventService.getEvents().subscribe((res) => {
      this.dataSource = res;
    });
  }

}
