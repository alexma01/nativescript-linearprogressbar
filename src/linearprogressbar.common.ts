import {
  View
} from "tns-core-modules/ui/core/view";
import * as app from 'tns-core-modules/application';
import * as dialogs from 'tns-core-modules/ui/dialogs';

import { Property, booleanConverter } from 'tns-core-modules/ui/core/view';

export const indeterminateProperty = new Property<Common, boolean>({name: 'indeterminate', defaultValue: false, valueConverter: booleanConverter, valueChanged: _onIndeterminateChanged });
export const barColorProperty = new Property<Common, string>({name: 'barColor', defaultValue: '#0000FF', valueChanged: _onBarColorChanged });

export abstract class Common extends View {
  public indeterminate: boolean;
  public barColor: string;

  [indeterminateProperty.getDefault](): boolean {
        this.indeterminate = false;
        return false;
  }

  [barColorProperty.getDefault](): string {
        this.barColor = '#0000FF';
        return '#0000FF';
  }

  public _setBarColor(color: string) {
    this.barColor = color;
  }

  public _setIndeterminate(indeterminate: boolean) {
    this.indeterminate = indeterminate;
  }

  public abstract setBarColor(color: string);
  public abstract setIndeterminate(indeterminate: boolean);
}

function _onIndeterminateChanged(target: Common, oldValue: boolean, newValue: boolean) {
    target.setIndeterminate(newValue);
}

function _onBarColorChanged(target: Common, oldValue: string, newValue: string) {
    target.setBarColor(newValue);
}

indeterminateProperty.register(Common);
barColorProperty.register(Common);