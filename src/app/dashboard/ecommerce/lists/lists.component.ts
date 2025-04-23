import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-lists',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './lists.component.html',
  styleUrl: './lists.component.scss'
})
export class ListsComponent {
  lists: { name: string }[] = [];
  isSidebarCollapsed = false;

  toggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }

  toggleListOrder() {
    console.log('toggleListOrder');
  }

  createList() {
    const newListName = prompt('Enter list name:');
    if (newListName) {
      this.lists.push({ name: newListName });
    }
  }
}
