import { Directive, inject, input } from "@angular/core";

@Directive({
    selector: 'a[appSafeLink]',
    standalone: true,
    host: {
        '(click)': 'onConfirmLeavePage($event)'
    }
})

export class SafeLinkDirective {
    queryParam = input<string>('myapp');

    constructor() {
        console.log('SafeLinkDirective created');
    }

    onConfirmLeavePage($event: MouseEvent) {
        const wantsToLeave = window.confirm('You are about to leave this page. Are you sure?');

        if (wantsToLeave) {
            const adress = ($event.target as HTMLAnchorElement).href;
            ($event.target as HTMLAnchorElement).href = adress + '?from=' + this.queryParam();
            return;
        }
        
        $event.preventDefault();
    }
}