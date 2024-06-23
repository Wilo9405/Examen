import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private apiUrl = 'https://api.multiavatar.com';

  constructor(private http: HttpClient) { }

  getAvatarSvg(avatarId: string): Observable<string> {
    const url = `${this.apiUrl}/${avatarId}.svg`;
    return this.http.get(url, { responseType: 'text' });
  }
}

