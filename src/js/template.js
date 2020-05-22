import { html, render } from "lit-html";
import header from "./components/header/header";
import "./components/peopleList/peopleList";
import "./components/sidebar/sidebar";

const App = () => {
  const template = () => {
    return html`
      ${header} <sidebar-element></sidebar-element> <people-list></people-list>
    `;
  };

  return render(template(), document.body);
};
export default App;
