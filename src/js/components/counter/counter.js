import { LitElement, html, css } from "lit-element";

class Counter extends LitElement {
  static get styles() {
    return css`
      div {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      p {
        padding: 0 15px;
      }
      button {
        border-radius: 50%;
        background-color: transparent;
        border: 1px solid black;
        width: 30px;
        height: 30px;
        outline: none;
      }
    `;
  }

  static get properties() {
    return {
      value: { type: Number },
      disabled: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.value = 0;
    this.disabled = true;
  }

  render() {
    return html`
      <div class="counter">
        <button
          @click="${() => {
            this.value -= 1;
            this.disabled = this.value === 0;
          }}"
          aria-label="decrement"
          ?disabled=${this.disabled}
        >
          -
        </button>
        <p>${this.value}</p>
        <button
          @click="${() => {
            this.value += 1;
            this.disabled = this.value === 0;
          }}"
          aria-label="increment"
        >
          +
        </button>
      </div>
    `;
  }
}

customElements.define("counter-component", Counter);
