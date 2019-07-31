import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AdminService } from '../admin.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({

    templateUrl: 'admin-newChapter.component.html',
    styleUrls: ['admin-newChapter.component.css']
})
export class AdminNewChapterComponent {

    adminnewchapterform: FormGroup;

    constructor(private http: HttpClient, private adminService: AdminService, private fb: FormBuilder, private router: Router) { }

    ngOnInit() {
        this.adminnewchapterform = this.fb.group({
            chapterName: ['', Validators.required],
            moduleName: ['', Validators.required]
        });
    }

}