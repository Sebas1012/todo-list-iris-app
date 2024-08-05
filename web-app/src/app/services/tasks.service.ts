import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskInterface } from '../interfaces/task.interface';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private BASE_API_URL: string = 'https://66aec30bb05db47acc5842d7.mockapi.io/api/v1/tasks'

  constructor(private httpClient: HttpClient) { }

  getTasks(): Observable<TaskInterface[]> {
    return this.httpClient.get<TaskInterface[]>(this.BASE_API_URL);  

  }
}

