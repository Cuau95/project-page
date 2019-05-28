import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {

  idUser: string;
  dataSource;
  displayedColumns: string[] = ['nombreFeria', 'direccionEvento', 'fechaInicio', 'fechaFin'];

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute,
    private router: Router) {
    this.route.queryParams.subscribe(params => {
      this.idUser = params['idUser'];
    })
  }

  ngOnInit() {
    this.eventService.getEvents().subscribe((res) => {
      this.dataSource = res;
    });
  }

  backToCompanyHome() {
    if(this.idUser.startsWith('USU')){
      this.router.navigate(['/home-student'], { queryParams: { idUser: this.idUser } });
    }
    if(this.idUser.startsWith('EMP')){
      this.router.navigate(['/home-company'], { queryParams: { idUser: this.idUser } });
    }
  }

}
