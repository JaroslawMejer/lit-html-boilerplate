import { html } from "lit-html";
import { LitElement, css } from "lit-element";
import { connect } from "pwa-helpers";
import { filterPeople } from "../../redux/actions";
import { VisibilityFilters } from "../../redux/reducer";

import store from "../../redux/store";

class Sidebar extends connect(store)(LitElement) {
  static get styles() {
    return css`
      aside {
        position: fixed;
        top: 0;
        left: 0;
        width: 100px;
        height: 100vh;
        box-shadow: 5px 0px 40px -7px rgba(0, 0, 0, 0.2);
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        padding: 10px 15px;
        box-sizing: border-box;
      }
      button {
        background-color: white;
        border: 1px solid black;
        width: 100%;
        margin-bottom: 15px;
        padding: 5px 5px;
      }
    `;
  }

  static get properties() {
    return {
      allPeople: { type: Array },
    };
  }

  stateChanged(state) {
    this.filter = state.filter;
  }

  handleFilterAdmin(passedRole) {
    console.log(passedRole);
    store.dispatch(filterPeople(passedRole));
  }

  render() {
    return html`
      <aside>
        <h3>Sidebar</h3>
        <p>Filters:</p>
        <button
          @click=${() => this.handleFilterAdmin(VisibilityFilters.SHOW_ALL)}
        >
          All
        </button>
        <button
          @click=${() => this.handleFilterAdmin(VisibilityFilters.SHOW_ADMIN)}
        >
          Admin
        </button>
        <button
          @click=${() =>
            this.handleFilterAdmin(VisibilityFilters.SHOW_CUSTOMER)}
        >
          Customer
        </button>
      </aside>
    `;
  }
}

customElements.define("sidebar-element", Sidebar);
