import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AdminService } from '../admin.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Courses } from '../courses';

@Component({

    templateUrl: 'admin-newChapter.component.html',
    styleUrls: ['admin-newChapter.component.css']
})
export class AdminNewChapterComponent {

    adminnewchapterform: FormGroup;
    course: Courses;

    constructor(private http: HttpClient, private adminService: AdminService, private fb: FormBuilder, private router: Router) { }

    ngOnInit() {

        console.log(this.course)
        console.log('here')
        this.adminnewchapterform = this.fb.group({

            chapterName: ['', Validators.required],
            moduleName: ['', Validators.required]

        });


        console.log('done')
    }

    addNewChapter() {

        this.adminService.addNewCourse(this.course).subscribe(

            () => this.router.navigate(["/addmodule"])
        )

        alert('done')
        console.log('added')

    }
}



