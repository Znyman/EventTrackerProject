import { Component, OnInit } from '@angular/core';
import { Winery } from '../../models/winery';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WineryService } from '../../services/winery.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  wineries: Winery[] = [];

  constructor(private wineryService: WineryService) {}

  ngOnInit(): void {
    this.loadWineries();
  }

  loadWineries() {
    this.wineryService.index().subscribe({
      next: (wineryList) => {
        this.wineries = wineryList;
        console.log(this.wineries)
      },
      error: (err) => {
        console.error("WineryListComponent.loadWineries error: ")
        console.error(err);
      }
    });
  }

}
