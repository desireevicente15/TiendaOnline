import {Component, OnInit} from '@angular/core';
import {SidebarStatusService} from '../../services/status/sidebar-status.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {

  isActiveMenuHeader: boolean = true;
  constructor(
    private sidebarStatusService: SidebarStatusService,
    private router: Router,
  )
  {}

  goToProfile() {
    this.router.navigate(['/app/profile']);
  }
  
  goToHome() {
    this.router.navigate(['/app/control-panel']);
  }

  ngOnInit(): void {
    this.sidebarStatusService.status$.subscribe(status => {
      this.isActiveMenuHeader = status;
    })
  }

}
