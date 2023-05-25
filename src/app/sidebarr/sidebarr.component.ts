import { Component } from '@angular/core';


@Component({
  selector: 'app-sidebarr',
  templateUrl: './sidebarr.component.html',
  styleUrls: ['./sidebarr.component.css']
})
export class SidebarrComponent {
 open = false;
// menu: MatMenuPanel<any>|null;

  handleDrawerOpen() {
    this.open = true;
  }

  handleDrawerClose() {
    this.open = false;
  }
  isClicked = false;
  activeItem: string | null = null;
  isExpanded = false;

  logoImage = this.isExpanded ? 'Line1.png' : 'Line.png';

  handleClick(): void {
    this.isClicked = !this.isClicked;
    this.isExpanded = !this.isExpanded;
  }

  handleItemClick(id: string): void {
    this.activeItem = id === this.activeItem ? null : id;
  }

  adminName:any=[
    {Name:"Anjalihgh", Image:"../assets/Rectangle 31.png", Admin:"Developer",Heading:"CX Inventory Management"}
  ]
  onProfileClick(): void {
    // Add your custom logic here
    console.log('Profile clicked');
  }
  
}
