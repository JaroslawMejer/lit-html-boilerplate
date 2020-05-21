import { html, nothing } from "lit-html";
import { LitElement, css } from "lit-element";
import people from "./list";
import "../counter/counter";

class PeopleList extends LitElement {
  static get styles() {
    return css`
      .box {
        border: 1px solid #b4b4b4;
        box-shadow: 0px 0px 6px -2px rgba(0, 0, 0, 0.4);
        padding: 15px 25px;
        margin-bottom: 25px;
        position: relative;
        overflow: hidden;
      }
      .test {
        position: absolute;
        top: 15px;
        right: -47px;
        background-color: blue;
        color: white;
        transform: rotate(45deg);
        padding: 5px 50px;
      }
    `;
  }

  static get properties() {
    return {
      allPeople: { type: Array },
    };
  }

  constructor() {
    super();
    this.allPeople = people;
  }

  handleClick(index) {
    console.log(index);
    this.allPeople.splice(index, 1);
    this.requestUpdate();
  }

  render() {
    return this.allPeople.map((person, index) => {
      // const clickHandler = {
      //   handleEvent(e) {
      //     console.log(`Clicked: ${e}`);
      //     console.log(`Index: ${index}`);
      //     console.log(this.allPeople);
      //     this.allPeople.splice(index, 1);
      //     this.requestUpdate();
      //   },
      //   capture: true,
      // };
      return html`
        <div
          class=${person.cssClass}
          @click=${() => {
            this.handleClick(index);
          }}
        >
          ${person.isAdmin ? html`<span class="test">ADMIN</span>` : nothing}
          <h2>Hello! My name is ${person.name}</h2>
          <p>I am ${person.age} and I work as a ${person.job}</p>
          <counter-component></counter-component>
        </div>
      `;
    });
  }
}

customElements.define("people-list", PeopleList);
