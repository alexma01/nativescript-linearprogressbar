import { Common } from './linearprogressbar.common';
import { Color } from 'tns-core-modules/color';

export class Linearprogressbar extends Common {

    private _nativeView: android.widget.ProgressBar;

    public createNativeView() {
        this._nativeView = new android.widget.ProgressBar(this._context, null, (android as any).R.attr.progressBarStyleHorizontal);
        this.setBarColor(this.barColor);
        this.setIndeterminate(this.indeterminate);
        return this._nativeView;
    }

    public setBarColor(color: string) {
        if (!this._nativeView) {
            return;
        }

        if (!Color.isValid(color)) {
            color = '#00F';
        }

        this._setBarColor(color);
        this._nativeView.getIndeterminateDrawable().setColorFilter(new Color(color).android, android.graphics.PorterDuff.Mode.SRC_IN);
    }

    public setIndeterminate(indeterminate: boolean) {
        if (!this._nativeView) {
            return;
        }

        this._setIndeterminate(indeterminate);
        this._nativeView.setIndeterminate(indeterminate);
    }

}