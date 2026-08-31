export function initNewsletter() {
  const form = document.querySelector(".newsletter-form");
  if (!form) return;

  // Placeholder until a real newsletter endpoint/provider is connected.
  form.addEventListener("submit", (event) => {
    event.preventDefault();
  });
}
