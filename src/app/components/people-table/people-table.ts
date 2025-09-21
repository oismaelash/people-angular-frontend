import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import { PeopleService } from '../../services/people.service';
import { Person, PeopleResponse } from '../../models/person.model';

@Component({
  selector: 'app-people-table',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatSnackBarModule
  ],
  templateUrl: './people-table.html',
  styleUrls: ['./people-table.scss']
})
export class PeopleTableComponent implements OnInit {
  displayedColumns: string[] = ['cpf', 'name', 'genre', 'age', 'neighborhood', 'state'];
  dataSource: Person[] = [];
  
  // Pagination
  totalCount = 0;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25, 50];
  
  // Filtering
  nameFilter = '';
  cpfFilter = '';
  genreFilter = '';
  stateFilter = '';
  
  // Loading state
  isLoading = false;

  constructor(
    private peopleService: PeopleService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loadPeople();
  }

  loadPeople(): void {
    this.isLoading = true;
    this.peopleService.getPeople(this.pageIndex + 1, this.pageSize)
      .subscribe({
        next: (response: PeopleResponse) => {
          this.dataSource = response.data;
          this.totalCount = response.totalCount;
          this.isLoading = false;
        },
        error: (error) => {
          console.error('Error loading people:', error);
          this.snackBar.open('Erro ao carregar pessoas', 'Fechar', {
            duration: 3000,
            horizontalPosition: 'right',
            verticalPosition: 'top'
          });
          this.isLoading = false;
        }
      });
  }

  onPageChange(event: PageEvent): void {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.loadPeople();
  }

  applyFilters(): void {
    // Reset to first page when applying filters
    this.pageIndex = 0;
    this.loadPeople();
  }

  clearFilters(): void {
    this.nameFilter = '';
    this.cpfFilter = '';
    this.genreFilter = '';
    this.stateFilter = '';
    this.pageIndex = 0;
    this.loadPeople();
  }

  refreshData(): void {
    this.loadPeople();
    this.snackBar.open('Dados atualizados com sucesso!', 'Fechar', {
      duration: 2000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    });
  }

  get filteredDataSource(): Person[] {
    let filtered = this.dataSource;

    if (this.nameFilter) {
      filtered = filtered.filter(person => 
        person.name.toLowerCase().includes(this.nameFilter.toLowerCase())
      );
    }

    if (this.cpfFilter) {
      filtered = filtered.filter(person => 
        person.cpf.includes(this.cpfFilter)
      );
    }

    if (this.genreFilter) {
      filtered = filtered.filter(person => 
        person.genre.toLowerCase().includes(this.genreFilter.toLowerCase())
      );
    }

    if (this.stateFilter) {
      filtered = filtered.filter(person => 
        person.state.toLowerCase().includes(this.stateFilter.toLowerCase())
      );
    }

    return filtered;
  }
}