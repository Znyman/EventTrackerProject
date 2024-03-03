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
  searchWineries: Winery[] = [];
  newWinery: Winery = new Winery;
  searchCity: string = "";

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

  addWinery(winery: Winery) {
    this.wineryService.create(winery).subscribe({
      next: (todo) => {
        this.loadWineries();
        this.newWinery = new Winery();
      },
      error: (problem) => {
        console.error("TodoListHttpComponent.addTodo(): Error adding todos:");
        console.error(problem);
      },
    });
  }

  updateWinery(winery: Winery): void {
    let tableRow = document.getElementById("winery" + winery.id);
    let wineryNameCol = tableRow!.firstElementChild;
    let wineryStreetCol = wineryNameCol!.nextElementSibling;
    let wineryCityCol = wineryStreetCol!.nextElementSibling;
    let wineryStateCol = wineryCityCol!.nextElementSibling;
    let updatedWinery = {
      id: winery.id,
      name: wineryNameCol!.textContent,
      street: wineryStreetCol!.textContent,
      city: wineryCityCol!.textContent,
      state: wineryStateCol!.textContent
    }
    this.wineryService.update(updatedWinery).subscribe({
      next: (todo) => {
        this.loadWineries();
      },
      error: (problem) => {
        console.error("TodoListHttpComponent.updateTodo(): Error updating todos:");
        console.error(problem);
      },
    });
  }

  deleteWinery(id: number) {
    this.wineryService.destroy(id).subscribe({
      next: (todo) => {
        this.loadWineries();
      },
      error: (problem) => {
        console.error("TodoListHttpComponent.deleteTodo(): Error deleting todos:");
        console.error(problem);
      },
    });
  }

  displaySearchWineries(city: string) {

    this.wineryService.getSearchWineries(city).subscribe({
      next: (wineryList) => {
        this.searchWineries = wineryList;
        let tableHead = document.getElementById("winerySearchTableHead");
        if (tableHead) {
          if (tableHead!.hasChildNodes()) {
            let firstChild = tableHead!.firstChild;
            if (firstChild) {
              tableHead!.removeChild(firstChild);
            }
          }
        }
        let headRow = document.createElement("tr");
        for (let i = 0; i < 4; i++) {
          let tableHeader = document.createElement("th");
          if (i === 0) {
            tableHeader.textContent = "Name";
          } else if (i === 1) {
            tableHeader.textContent = "Street";
          } else if (i === 2) {
            tableHeader.textContent = "City";
          } else {
            tableHeader.textContent = "State";
          }
          headRow.appendChild(tableHeader);
        }
        tableHead!.appendChild(headRow);

        let tableBody = document.getElementById("winerySearchTable");
        tableBody!.textContent = "";
        for (let winery of this.searchWineries) {
          let tableRow = document.createElement("tr");
          tableBody!.appendChild(tableRow);
          Object.entries(winery).forEach(([key, value]) => {
            if (`${key}` !== "id") {
              let tableData = document.createElement("td");
              tableData.textContent = `${value}`;
              tableData.setAttribute("contenteditable", "true");
              tableRow.appendChild(tableData);
            }
          });
        }
      },
      error: (err) => {
        console.error("WineryListComponent.loadWineries error: ")
        console.error(err);
      }
    });



  }

}
