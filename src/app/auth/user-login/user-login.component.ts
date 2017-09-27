import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';

@Component({
    selector: 'user-login',
    templateUrl: './user-login.component.html',
    styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

    constructor(public authService: AuthService, private router: Router) {}

    ngOnInit() {
    }

    signInAnonymously() {
        this.authService.anonymousLogin()
            .then(() => this.router.navigate(['/']));
    }
}
