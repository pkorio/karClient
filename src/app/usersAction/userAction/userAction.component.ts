import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { TransformedWordService } from '../../transformed-word.service';
import { TransformedWord } from '../../model/transformed-word';

@Component({
  selector: 'app-user',
  templateUrl: './userAction.component.html',
  styleUrls: ['./userAction.component.css']
})
export class UserActionComponent implements OnInit, OnDestroy {
  user: {id: number, name: string};
  transformedWord: TransformedWord;
  paramsSubscription: Subscription;
  httpSubscription: Subscription;
  inputToken = '';
  id: string;

  constructor(private transformedWordService: TransformedWordService,
              private route: ActivatedRoute) { }

  ngOnInit() {

   this.id = this.route.snapshot.params['id'];

    this.paramsSubscription = this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
        }
      );
     // this.inputToken = this.id;


    this.httpSubscription = this.transformedWordService.sayAWord(this.id).subscribe(
           data => {
             this.transformedWord = data;
           },
           error2 => {
             console.error(error2);
           }
         );

  }
  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
    this.httpSubscription.unsubscribe();
  }

}
