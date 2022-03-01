import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('itoz-button')
export class ItozButton extends LitElement {
  static override styles = css`
    button {
      font-size: 23px;
      font-weight: bold;
      background-color: transparent;
      border: none;
      letter-spacing: 2px;
      cursor: pointer;
      outline: none;
      appearance: none;
      color: #fff;
      padding: 12px 30px;
      border-radius: 18px;
      overflow: hidden;
      background: linear-gradient(135deg, #427eff 0%, #f13f79 70%);
      box-shadow: 0 2px 4px 4px rgba(0, 0, 0, 0);
      transition: all 0.15s ease;
    }

    button:hover{
      transform: translateY(-0px);
      transform:translateY(-2px);
      transition: all 0.35s ease;
      background: linear-gradient(135deg, #427eff 0%, #f13f79 70%);
      box-shadow: 0 4px 8px 0px rgba(0, 0, 0, 0.5);
    }

    button:focus{
      outline:solid 2px #0c0;
      outline-offset:2px;
    }
  `;
  constructor() {
    super();
    this.addEventListener('focus', this._handleFocus);
  }
  override render() {
    return html`
      <button @click=${this._onClick} part="button">
        <slot></slot>
      </button>
    `;
  }

  private _handleFocus(){
    this.dispatchEvent(new CustomEvent('on-focus'));
  }

  private _onClick() {
    this.dispatchEvent(new CustomEvent('count-changed'));
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'itoz-button': ItozButton;
  }
}
