import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../utilities/service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: '../../utilities/other/list.template.html',
  styleUrls: [
    '../../utilities/other/list.template.css'
  ]
})
export class UserListComponent implements OnInit {

  title = `User List`;
  description = `Below you'll find a list of our users.`;
  items = [];
  headers = ['ID', 'Name', 'Email', 'Address', 'Role'];

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(response => {
      for (let a = 0; a < response.length; a++)
      {
        const item = response[a];
        const detail = [
            item.id,
            `${item.firstName} ${item.lastName}`,
            item.email,
            item.address,
            item.userRole.roleName
        ];
        this.items.push(detail);
      }
    });
  }

  addClick()
  {
    this.router.navigate(['users', 'add']);
  }

  editClick(item)
  {
    this.router.navigate(['users', item[0]]);
  }

  deleteClick(item)
  {

  }
}
