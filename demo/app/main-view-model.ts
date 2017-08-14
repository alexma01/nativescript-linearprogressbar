import { Observable } from 'tns-core-modules/data/observable';
import { Linearprogressbar } from 'nativescript-linearprogressbar';

export class HelloWorldModel extends Observable {
  public message: string;
  private linearprogressbar: Linearprogressbar;

  constructor() {
    super();
  }
}