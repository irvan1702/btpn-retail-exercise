import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TitleCasePipe } from '@angular/common';
import { UserService } from '../../utilities/service/user.service';
import { MdDialog, MdDialogRef, MdDialogConfig, MdSnackBar } from '@angular/material';

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
    private titleCasePipe: TitleCasePipe,
    private userService: UserService,
    private router: Router,
    private dialog: MdDialog,
    private snackBar: MdSnackBar
  ) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers()
  {
    this.items = [];
    this.userService.getUsers().subscribe(response => {
      for (let a = 0; a < response.length; a++)
      {
        const item = response[a];
        const detail = [
            item.id,
            `${item.firstName} ${item.lastName}`,
            item.email,
            item.address,
            this.titleCasePipe.transform(item.userRole.roleName)
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
    let config = new MdDialogConfig;

    let dialogRef = this.dialog.open(DeleteUserDialog, config);
    dialogRef.componentInstance.userName = item[1];

    dialogRef.afterClosed().subscribe(result => {
      if (result)
        this.deleteUser(item[0]);
    });
  }

  deleteUser(userId: number)
  {
    this.userService.deleteUser(userId).subscribe(response => {
      this.getUsers();
      this.snackBar.open(`Successfully deleted ${response.firstName} ${response.lastName}`, 'OK', {
        duration: 1500
      })
    });
  }
}

@Component({
  selector: 'delete-user-dialog',
  templateUrl: './delete-user-dialog.html',
  styleUrls: ['./delete-user-dialog.css']
})
export class DeleteUserDialog {
  constructor(public dialogRef: MdDialogRef<DeleteUserDialog>) {}

  userName;
}