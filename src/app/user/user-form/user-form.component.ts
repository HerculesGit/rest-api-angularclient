import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user-service.service';

// Class for save object


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  user: User;

  constructor(private route: ActivatedRoute, private router: Router,
    private userService: UserService) {

    // inicializer
    this.user = new User();

  }

  ngOnInit() {
  }

  onSubmit() {
    this.userService.save(this.user).subscribe(
      // quando salvar ele vai chamar esse método para ir para a lista de usuários
      result => this.gotoUserList()
    );
  }

  gotoUserList() {
    this.router.navigate(['/users']);
  }

}
