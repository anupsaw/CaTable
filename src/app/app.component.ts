import { Component } from '@angular/core';
import { DataService } from './services/data/data.service';
import { User } from './services/data/User.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CaTable';
  users: Array<User>;
  columns: Array<string>;
  constructor(private readonly data: DataService) {
    this.data.getSampleData().subscribe((users) => {
      this.users = users;
      this.columns = [];
      for (let key in users[0]) {
        this.columns.push(key);
      }
    });
  }
}
