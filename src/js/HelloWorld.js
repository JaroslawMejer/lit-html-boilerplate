import { html, render } from "lit-html";

const people = {
  name: "Jaroslaw",
  age: 28,
  job: "Front End Developer",
  cssClass: "box worker",
};

const LitTest = () => {
  const template = (person) => html`
    <div class=${person.cssClass}>
      <h2>Hello! My name is ${person.name}</h2>
      <p>I am ${person.age} and I work as a ${person.job}</p>
    </div>
  `;

  render(template(people), document.body);
};
export default LitTest;
