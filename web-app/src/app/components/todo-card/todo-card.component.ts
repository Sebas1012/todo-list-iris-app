import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { TaskInterface } from '../../interfaces/task.interface';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-card',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.css']
})

export class TodoCardComponent implements OnInit {

  tasks: TaskInterface[] = [];
  selectedTag: string = 'All'
  uniqueTasks: TaskInterface[] = [];
  filteredTasks: TaskInterface[] = [];

  constructor(private taskService: TasksService) {}

  ngOnInit() {
    this.getTasks();
  }

  getTasks() {
    this.taskService.getTasks().subscribe({
      next: (tasks) => {
        const uniqueTags = new Set<string>();
        const uniqueTasks: TaskInterface[] = [];

        tasks.forEach(task => {
          if (!uniqueTags.has(task.tag)) {
            uniqueTags.add(task.tag);
            uniqueTasks.push(task);
          }
        });

        this.uniqueTasks = uniqueTasks;
        this.tasks = tasks;
        this.filteredTasks = this.tasks;
        this.filterTasks();
      },
      error: (error) => {
        console.error('Error fetching tasks:', error);
      }
    });
  }

  filterTasks() {
    console.log(this.selectedTag)

    if (this.selectedTag === 'All') {
      this.filteredTasks = this.tasks;
    } else {
      this.filteredTasks = this.tasks.filter(task => task.tag === this.selectedTag);
    }

    console.log(this.filterTasks)
  }

  toggleTaskCompletion(task: TaskInterface) {
    task.completed = !task.completed;
  }


}

