import { Injectable } from '@angular/core';

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
}

const MENUITEMS = [
 
  { state: 'dashboard', name: 'Dashboard', type: 'link', icon: 'av_timer' },
  { state: 'update', type: 'link', name: 'Update', icon: 'view_comfy' },
  { state: 'officer', type: 'link', name: 'IndigentOfficer', icon: 'view_list' },
  { state: 'menu', type: 'link', name: 'Menu', icon: 'view_headline' },
  { state: 'View', type: 'link', name: 'View', icon: 'tab' },
  { state: 'Audit trail', type: 'link', name: 'Audit trail', icon: 'find_in_page' },
  


  
];

@Injectable()
export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }
}
