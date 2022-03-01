
import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('itoz-spinner')
export class ItozSpinner extends LitElement {  
  static override styles = css`

    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    :host{
      position:relative;
    }
    
    .spinner{
      box-sizing: border-box;
      position: relative;
      display: inline-block;
      margin: 0;
      width: 120px;
      height: 120px;
      border: 2px solid #420eff;
      border-radius: 50%;
      animation: spin 0.75s infinite linear;
    }

    .spinner::before,
    .spinner::after {
      box-sizing: border-box;
      left: -2px;
      top: -2px;
      display: none;
      position: absolute;
      content: '';
      width: inherit;
      height: inherit;
      border: inherit;
      border-radius: inherit;
    }

    .spinner::before{
      animation: spin 1.65s infinite ease-in-out;
    }

    .spinner::after{
      display: inline-block;
      border-color: transparent;
      border-top-color: #f13f79;
      transform: rotate(50deg);
    }

    .spinner,.spinner::before{
      display: inline-block;
      border-color: transparent;
      border-top-color: #427eff;
    }
    ::slotted(*) {
    }
    .slot{
      position:absolute;
      top:0;
      left:0;
      display:flex;
      justify-content:center;
      align-items:center;
      width:120px;
      height:120px;
      color:#666;
    }
  `;


  override render() {
    return html`
      <div>
        <div class='spinner'></div>
        <div class='slot'>
          <slot></slot>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'itoz-spinner': ItozSpinner;
  }
}