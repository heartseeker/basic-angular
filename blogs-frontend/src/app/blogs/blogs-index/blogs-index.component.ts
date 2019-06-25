import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/core/http.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-blogs-index',
  templateUrl: './blogs-index.component.html',
  styleUrls: ['./blogs-index.component.scss']
})
export class BlogsIndexComponent implements OnInit {

  form: FormGroup;

  blogs = [];

  constructor(
    private http: HttpService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.http.get('/blogs').subscribe((data: any[]) => {
      this.blogs = data;
    });

    this.form = this.fb.group({
      title: [],
      content: []
    });
  }

  save() {
    const title = this.form.value.title;
    const content = this.form.value.content;

    this.http.post('/blogs', { title, content }).subscribe(data => {
      // push new blog to current blogs
      this.blogs.push(data);
      alert('Successfully created!');
    });
  }

  remove(blog) {
    const index = this.blogs.findIndex(b => b.id === blog.id);
    this.http.delete(`/blogs/${blog.id}`).subscribe(data => {
      // remove data to the current blogs
      this.blogs.splice(index, 1);
      alert('Deleted created!');
    });
  }

}
