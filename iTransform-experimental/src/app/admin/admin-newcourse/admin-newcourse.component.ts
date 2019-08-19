import { Component, OnInit } from '@angular/core';
import $ from 'jquery';
import { Courses } from 'src/app/course/course';
import { AdminService } from '../admin.service';
import { Validators, FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
    templateUrl: './Admin-newcourse.component.html',
    styleUrls: ['./admin-newcourse.component.css']
})
export class AdminNewCourseComponent implements OnInit {

    course: Courses;
    courses: Courses[];
    constructor(private http: HttpClient, private adminService: AdminService, private fb: FormBuilder, private router: Router) { }

    adminWelcomeForm: FormGroup;
    ngOnInit() {


        console.log(this.course)
        this.adminWelcomeForm = this.fb.group({

            course: this.fb.array([this.addCourseGroup()]),


        });


        // this.adminService.addNewCourse(this.course).subscribe((data) => {
        //     this.courses = data;
        //     console.log(this.course)
        //     this.courses.push(this.course);
        //     console.log(this.course)
        // })

        this.course = new Courses();



        // $(document).ready(function () {
        //     //@naresh action dynamic childs
        //     var next = 0;

        // $("#add-more").click(function (e) {
        //     e.preventDefault();
        //     var addto = "#field" + next;
        //     var addRemove = "#field" + (next);
        //     next = next + 1;
        //     // tslint:disable-next-line:max-line-length
        //     var newIn = ' <div id="field' + next + '" name="field' + next + '"> <div class="form-group"><label class="col-md-4 control-label" for="chapterName"> Chapter Name</label><div class="col-md-5"> <input id="chapterName" name="chapterName" type="text" placeholder="Chapter Name" class="form-control input-md"></div></div><div class="form-group"><label class="col-md-4 control-label" for="moduleName">Module Name</label><div class="col-md-5"> <input id="moduleName" name="moduleName" type="text" placeholder="Module Name" class="form-control input-md"></div></div><div class="form-group"><label class="col-md-4 control-label" for="title">Title</label><div class="col-md-5"><input id="title" name="title" type="text" placeholder="Title" class="form-control input-md"></div></div><div class="form-group"><div class="col-md-5"><label class="col-md-9 control-label" for="description">Description<textarea id="description" name="description" type="text" placeholder="Description" class="form-control input-md" ></textarea> </div></div> <div class="form-group"><div class="col-md-5"> <label class="col-md-9 control-label" for="codesnippet">Code Snippet<textarea id="codeSnippet" name="codeSnippet" type="text" placeholder="Code Snippet" class="form-control input-md" ></textarea></div></div> ';
        //     var newInput = $(newIn);
        //     // tslint:disable-next-line:max-line-length
        //     var removeBtn = '<button id="remove' + (next - 1) + '" class="btn btn-danger remove-me" >Remove</button></div></div><div id="field">';
        //     var removeButton = $(removeBtn);
        //     $(addto).after(newInput);
        //     $(addRemove).after(removeButton);
        //     $("#field" + next).attr('data-source', $(addto).attr('data-source'));
        //     $("#count").val(next);

        //     $('.remove-me').click(function (e) {
        //         e.preventDefault();
        //         var fieldNum = this.id.charAt(this.id.length - 1);
        //         // tslint:disable-next-line:prefer-const
        //         var fieldID = '#field' + fieldNum;
        //         $(this).remove();
        //         $(fieldID).remove();
        //     });
        // });


        // var newb= 0;
        // $("#add-new").click(function(e){
        //     e.preventDefault();
        //     var addtob = "#box" + newb;
        //     var addRemoveb = "#box" + (newb);
        //     next = next + 1;
        //     // tslint:disable-next-line:max-line-length
        //     var newInb = ' <div id="box'+ newb +'" name="box'+ newb +'"> <div class="form-group"><label class="col-md-4 control-label" for="chapterName">Chapter Name</label><div class="col-md-5"> <input id="chapterName" name="chapterName" type="text" placeholder="Chapter Name" class="form-control input-md"></div></div><div class="form-group"><label class="col-md-4 control-label" for="moduleName">Module Name</label><div class="col-md-5"> <input id="moduleName" name="moduleName" type="text" placeholder="Module Name" class="form-control input-md"></div></div><div class="form-group"><label class="col-md-4 control-label" for="title">Title</label><div class="col-md-5"><input id="title" name="title" type="text" placeholder="Title" class="form-control input-md"></div></div><div class="form-group"><div class="col-md-5"><textarea id="description" name="description" type="text" placeholder="Description" class="form-control input-md" ></textarea> </div></div> <div class="form-group"><div class="col-md-5"><textarea id="codeSnippet" name="codeSnippet" type="text" placeholder="Code Snippet" class="form-control input-md" ></textarea></div></div> ';
        //     var newInputb = $(newInb);
        //     // tslint:disable-next-line:max-line-length
        //     var removeBtnb = '<button id="remove' + (newb - 1) + '" class="btn btn-danger remove-meb" >Remove</button></div></div><div id="field">';
        //     var removeButtonb = $(removeBtnb);
        //     $(addtob).after(newInputb);
        //     $(addRemoveb).after(removeButtonb);
        //     $("#box" + newb).attr('data-source',$(addtob).attr('data-source'));
        //     $("#count").val(newb); 

        //     $('.remove-meb').click(function(e){
        //             e.preventDefault();
        //             var fieldNumb= this.id.charAt(this.id.length-1);
        //             // tslint:disable-next-line:prefer-const
        //             var fieldIDb = '#box' + fieldNumb;
        //             $(this).remove();
        //             $(fieldIDb).remove();
        //         });
        // });

        //     });
    }

    addCourseGroup(): FormGroup {
        return this.fb.group({

            courseName: ['', Validators.required],
            courseImage: ['', Validators.required],


        })
    }

    addCourses() {

        this.adminService.addNewCourse(this.course).subscribe(

            () => this.router.navigate(['/addchapter'])
        );


        console.log(this.course)
        alert('new')

    }

    removeCourses(index) {
        this.courseArray.removeAt(index);
    }
    // addCourse() {
    //     this.adminService.addNewCourse(this.course).subscribe((data) => {
    //         // if (data != null) {
    //         this.courseArray.push(this.addCourseGroup());
    //         alert('added');
    //         // }
    //     });
    // }
    // $(document).ready(function() {
    //     var max_fields      = 10; //maximum input boxes allowed
    //     var wrapper         = $(".new-row"); //Fields wrapper
    //     var add_button      = $(".add_field_button"); //Add button ID
    //     var hide_div = $(".row-repeat");
    //     var label = $('.chapname');
    //     var inp= $('after-add-more');
    //     var inpbtn= $('chaptername');
    //     console.log(add_button);
    //     console.log(hide_div);
    //     var x = 1; //initlal text box count
    //     $(add_button).on("click",function(e){ //on add input button click
    //         e.preventDefault();
    //         if(x < max_fields){ //max input box allowed
    //             x++; //text box increment
    //             // tslint:disable-next-line:max-line-length
    //             $(wrapper).append( '<div class="col-sm-12><div class="col-sm-6"><label for="chapterName">Chapter Name</label><div class="input-group control-group after-add-more"><input type="text" class="form-control" placeholder="Chapter Name" name="chaptername" id="chapterName"></div> </div>    <div class="col-sm-6" style="padding:0"><label for="moduleName">Module Name</label><div class="input-group control-group after-add-more"><input type="text" class="form-control" placeholder="Module Name" name="modulename" id="moduleName"></div></div><a href="#" class="remove_field">Remove</a></div>'); //add input box
    //             // $(wrapper).append('<div class="col-sm-6">');
    //             // $(wrapper).append(label);
    //             // $(wrapper).append(inp);
    //             // $(inp).wrap(inpbtn);
    //             // $(wrapper).append('</div>')
    //         }
    //     });

    //     $(wrapper).on("click",".remove_field", function(e){ //user click on remove text
    //         e.preventDefault(); $(this).parent('div').remove(); x--;
    //     })
    // });

    submitHandler() {

        this.adminService.addNewCourse(this.course).subscribe(

            (data) => this.router.navigate(['adminwelcome']),
            (err: any) => console.log(err),

        );
        alert('added')
        console.log(this.adminWelcomeForm.value);
        alert("done")
    }

    get courseArray() { return <FormArray>this.adminWelcomeForm.get("course") }


}