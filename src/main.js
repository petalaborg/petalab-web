import "./styles/main.css";

import header from "./segments/00-header.html?raw";
import hero from "./segments/01-hero.html?raw";
import about from "./segments/02-about.html?raw";
import whySpace from "./segments/03-why-space.html?raw";
import centres from "./segments/04-centres.html?raw";
import howWeWork from "./segments/05-how-we-work.html?raw";
import research from "./segments/06-research.html?raw";
import updates from "./segments/07-updates.html?raw";
import involved from "./segments/08-involved.html?raw";
import newsletter from "./segments/09-newsletter.html?raw";
import footer from "./segments/10-footer.html?raw";

import { initInsights } from "./js/insights.js";
import { initNavigation } from "./js/navigation.js";
import { initNewsletter } from "./js/newsletter.js";
import { initReveal } from "./js/reveal.js";

const app = document.querySelector("#app");

app.innerHTML = `
  ${header}
  <main id="top">
    ${hero}
    ${about}
    ${whySpace}
    ${centres}
    ${howWeWork}
    ${research}
    ${updates}
    ${involved}
    ${newsletter}
  </main>
  ${footer}
`;

initNavigation();
initReveal();
initInsights();
initNewsletter();
