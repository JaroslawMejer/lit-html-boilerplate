import { html, nothing } from "lit-html";
import { LitElement, css } from "lit-element";
import { connect } from "pwa-helpers";
import { removePerson } from "../../redux/actions";
import store from "../../redux/store";
import "../counter/counter";

class PeopleList extends connect(store)(LitElement) {
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

  stateChanged(state) {
    this.allPeople = state.peopleList;
  }

  handleClick(index) {
    console.log(index);

    store.dispatch(removePerson(index));
  }

  render() {
    return this.allPeople.map((person) => {
      return html`
        <div class=${person.cssClass}>
          ${person.role === "Admin"
            ? html`<span class="test">ADMIN</span>`
            : nothing}
          <h2>Hello! My name is ${person.name}</h2>
          <p>I am ${person.age} and I work as a ${person.job}</p>
          <counter-component></counter-component>
          <span
            @click=${() => {
              this.handleClick(person.personId);
            }}
            >X</span
          >
        </div>
      `;
    });
  }
}

customElements.define("people-list", PeopleList);
