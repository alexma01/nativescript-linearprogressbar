import { Common } from './linearprogressbar.common';
import { Color } from 'tns-core-modules/color';

declare var LinearProgressBar: any;

export class Linearprogressbar extends Common {

    private _nativeView;


    public createNativeView() {
        this._nativeView = LinearProgressBar.new();
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
        let barColor = new Color(color);
        let red = (barColor.r < 255) ? Math.round((barColor.r+1) / 4) + 189 : 255;
        let green = (barColor.g < 255) ? Math.round((barColor.g+1) / 4) + 189 : 255;
        let blue = (barColor.b < 255) ? Math.round((barColor.b+1) / 4) + 189 : 255;
        let barBackgroundColor = new Color(255, red, green, blue);

        this._nativeView.backgroundProgressBarColor = new UIColor({red: barBackgroundColor.r/256, green: barBackgroundColor.g/256, blue: barBackgroundColor.b/256, alpha: 1.0});
        this._nativeView.progressBarColor = barColor.ios;
    }

    public setIndeterminate(indeterminate: boolean) {
        if (!this._nativeView) {
            return;
        }

        this._setIndeterminate(indeterminate);
        if (indeterminate) {
            this._nativeView.startAnimation();
        } else {
            this._nativeView.stopAnimation();
        }
    }

}