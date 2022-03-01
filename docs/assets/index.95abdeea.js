import{r as d,s as f,$ as c,n as u}from"./vendor.d014380a.js";const b=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}};b();var h=Object.defineProperty,x=Object.getOwnPropertyDescriptor,v=(s,o,i,n)=>{for(var e=n>1?void 0:n?x(o,i):o,t=s.length-1,r;t>=0;t--)(r=s[t])&&(e=(n?r(o,i,e):r(e))||e);return n&&e&&h(o,i,e),e};let l=class extends f{constructor(){super();this.addEventListener("focus",this._handleFocus)}render(){return c`
      <button @click=${this._onClick} part="button">
        <slot></slot>
      </button>
    `}_handleFocus(){this.dispatchEvent(new CustomEvent("on-focus"))}_onClick(){this.dispatchEvent(new CustomEvent("count-changed"))}};l.styles=d`
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
      outline:solid 2px #009;
      outline-offset:2px;
    }
  `;l=v([u("itoz-button")],l);var g=Object.defineProperty,m=Object.getOwnPropertyDescriptor,_=(s,o,i,n)=>{for(var e=n>1?void 0:n?m(o,i):o,t=s.length-1,r;t>=0;t--)(r=s[t])&&(e=(n?r(o,i,e):r(e))||e);return n&&e&&g(o,i,e),e};let a=class extends f{render(){return c`
      <div>
        <div class='spinner'></div>
        <div class='slot'>
          <slot></slot>
        </div>
      </div>
    `}};a.styles=d`

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
  `;a=_([u("itoz-spinner")],a);var y=Object.defineProperty,w=Object.getOwnPropertyDescriptor,O=(s,o,i,n)=>{for(var e=n>1?void 0:n?w(o,i):o,t=s.length-1,r;t>=0;t--)(r=s[t])&&(e=(n?r(o,i,e):r(e))||e);return n&&e&&y(o,i,e),e};let p=class extends f{constructor(){super();this.addEventListener("focus",this._handleFocus)}render(){return c`
      <div>
        <input type="text" @click=${this._onClick} />
      </div>
    `}_handleFocus(){this.dispatchEvent(new CustomEvent("on-focus"))}_onClick(){this.dispatchEvent(new CustomEvent("click"))}};p.styles=d`
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
  `;p=O([u("itoz-input")],p);
