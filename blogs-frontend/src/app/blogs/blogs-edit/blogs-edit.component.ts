import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/core/http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-blogs-edit',
  templateUrl: './blogs-edit.component.html',
  styleUrls: ['./blogs-edit.component.scss']
})
export class BlogsEditComponent implements OnInit {

  blog;

  form: FormGroup;

  constructor(
    private http: HttpService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {

    this.form = this.fb.group({
      title: [],
      content: []
    });

    this.activatedRoute.params.subscribe(param => {
      this.http.get(`/blogs/${param.id}`).subscribe(data => {
        this.blog = data;
        // populate form with data
        this.form.get('title').setValue(this.blog.title);
        this.form.get('content').setValue(this.blog.content);
      });
    });

  }

  update() {
    this.http.put(`/blogs/${this.blog.id}`, this.form.value).subscribe(data => {
      this.router.navigate(['/blogs']);
    });
  }

}
