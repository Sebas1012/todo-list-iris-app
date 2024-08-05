import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { TaskInterface } from '../../interfaces/task.interface';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-card',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.css']
})

export class TodoCardComponent implements OnInit {

  tasks: TaskInterface[] = [];

  constructor(private taskService: TasksService) {}

  ngOnInit() {
    this.getTasks();
  }

  getTasks() {
    this.taskService.getTasks().subscribe({
      next: (tasks) => {
        this.tasks = tasks;
      },
      error: (error) => {
        console.error('Error fetching tasks:', error);
      }
    });
  }

}

