import { Component } from '@angular/core';
import {NgIf} from '@angular/common';
import {TabNotificationComponent} from '../tabs/tab-notification/tab-notification.component';
import {SidebarStatusService} from '../../services/status/sidebar-status.service';
import {SettingsComponent} from '../tabs/settings/settings.component';
import { ProfileComponent } from "../tabs/profile/profile.component";
import { ToolsComponent } from '../tabs/tools/tools.component';

@Component({
  selector: 'app-header-backoffice',
  imports: [
    NgIf,
    TabNotificationComponent,
    SettingsComponent,
    ProfileComponent,
    ToolsComponent
],
  standalone: true,
  templateUrl: './header-backoffice.component.html',
  styleUrl: './header-backoffice.component.scss'
})
export class HeaderBackofficeComponent {

  isActive: boolean = true;

  // Variables de tabs

  isActiveItems: any = {
    isActiveNotification: false,
    isActiveSettings: false,
    isActiveProfile: false,
    isActiveTools: false,
  }

  constructor(
    private sidebarStatusService: SidebarStatusService,
  ) {}

  // isActiveNotification: boolean = false;

  toggleLogo() {
    this.isActive = !this.isActive;
    this.sidebarStatusService.changeStatus(this.isActive);
  }

  toggleItem(option: string) {
    if (this.isActiveItems[option]) {
      this.isActiveItems[option] = false;
    }
    else {
      Object.keys(this.isActiveItems).forEach((item) => {
        this.isActiveItems[item] = false;
      })
      this.isActiveItems[option] = true;
    }
  }

}
