import { Component } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Courses } from 'src/app/course/course';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';
import { Course } from 'src/app/user/user';

@Component({
    templateUrl: 'admin-NewModule.component.html',
    styleUrls: ['admin-NewModule.component.css']
})
export class AdminNewModuleComponent {

    course: Courses;
    courses: Courses;
    adminModuleForm: FormGroup;

    constructor(private adminService: AdminService, private router: Router) { }

    ngOnInit() {
        console.log(this.courses)
        this.adminModuleForm = new FormGroup({
            Title: new FormControl('', Validators.required),


        })

    }

    addNewModule() {

        this.adminService.addNewCourse(this.course).subscribe(

            () => this.router.navigate(["/addcourse"])
        )

        console.log('module added')
    }

}