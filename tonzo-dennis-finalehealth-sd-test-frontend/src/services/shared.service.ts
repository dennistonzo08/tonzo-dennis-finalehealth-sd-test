import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private data_id = new BehaviorSubject<{}>({});
  currentData = this.data_id.asObservable();

  updateId(id: string,name: string) {
    this.data_id.next({ id,name  });
  }
}