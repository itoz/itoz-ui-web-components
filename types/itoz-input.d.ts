import { LitElement } from 'lit';
export declare class ItozInput extends LitElement {
    static styles: import("lit").CSSResult;
    constructor();
    render(): import("lit-html").TemplateResult<1>;
    private _handleFocus;
    private _onClick;
}
declare global {
    interface HTMLElementTagNameMap {
        'itoz-input': ItozInput;
    }
}
