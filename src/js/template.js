import { html, render } from "lit-html";
import header from "./components/header/header";
import "./components/peopleList/peopleList";

const App = () => {
  const template = () => {
    return html` ${header} <people-list></people-list> `;
  };

  return render(template(), document.body);
};
export default App;
