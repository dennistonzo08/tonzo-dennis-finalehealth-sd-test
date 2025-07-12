import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'navbar',
  imports: [RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})

export class Navbar {

  activeNav = 'dashboard'

  setActiveNav(event: Event){
    event.preventDefault();
    const target = event.target as HTMLElement;
    this.activeNav = target.id === 'patients' ? 'patients' : 'dashboard';
  }

}
