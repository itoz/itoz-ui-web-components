import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('itoz-input')
export class ItozInput extends LitElement {
  static override styles = css`
    @keyframes color {
      from {
        background-position: 0px 0px;
      }
      to {
        background-position: -200% 0px ;
      }
    }

    div{
      background: linear-gradient(135deg, #427eff 0%, #f13f79 50%, #427eff  100%);
      background-size: 200% 70px;
      padding:3px;
      display:inline-block;
      border-radius:20px;
      animation: color 2s infinite linear;
    }

    input {
      font-size: 23px;
      font-weight: bold;
      background-color: ##ffffff55;
      border: none;
      letter-spacing: 2px;
      cursor: pointer;
      outline: none;
      appearance: none;
      color: #009;
      padding: 12px 16px;
      border-radius: 18px;
      overflow: hidden;
      box-shadow: 0 2px 4px 4px rgba(0, 0, 0, 0);
      transition: all 0.15s ease;
    }

    input:focus{
      outline:solid 2px #009;
      outline-offset:5px;
    }
  `;
  constructor() {
    super();
    this.addEventListener('focus', this._handleFocus);
  }
  override render() {
    return html`
      <div>
        <input type="text" @click=${this._onClick} />
      </div>
    `;
  }

  private _handleFocus(){
    this.dispatchEvent(new CustomEvent('on-focus'));
  }

  private _onClick() {
    this.dispatchEvent(new CustomEvent('click'));
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'itoz-input': ItozInput;
  }
}
