import{r as p,s as f,$ as d,n as c}from"./vendor.d014380a.js";const u=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}};u();var b=Object.defineProperty,h=Object.getOwnPropertyDescriptor,g=(s,r,i,o)=>{for(var e=o>1?void 0:o?h(r,i):r,t=s.length-1,n;t>=0;t--)(n=s[t])&&(e=(o?n(r,i,e):n(e))||e);return o&&e&&b(r,i,e),e};let l=class extends f{constructor(){super();this.addEventListener("focus",this._handleFocus)}render(){return d`
      <button @click=${this._onClick} part="button">
        <slot></slot>
      </button>
    `}_handleFocus(){this.dispatchEvent(new CustomEvent("on-focus"))}_onClick(){this.dispatchEvent(new CustomEvent("count-changed"))}};l.styles=p`
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
  `;l=g([c("itoz-button")],l);var x=Object.defineProperty,v=Object.getOwnPropertyDescriptor,m=(s,r,i,o)=>{for(var e=o>1?void 0:o?v(r,i):r,t=s.length-1,n;t>=0;t--)(n=s[t])&&(e=(o?n(r,i,e):n(e))||e);return o&&e&&x(r,i,e),e};let a=class extends f{render(){return d`
      <div>
        <div class='spinner'></div>
        <div class='slot'>
          <slot></slot>
        </div>
      </div>
    `}};a.styles=p`

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
  `;a=m([c("itoz-spinner")],a);