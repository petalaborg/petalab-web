const ANIMATION_DURATION_MS = 930;
const NAVIGATION_DELAY_MS = 280;

function playInsightAnimation(card) {
  card.classList.remove("is-animating");
  void card.offsetWidth;
  card.classList.add("is-animating");

  window.setTimeout(() => {
    card.classList.remove("is-animating");
  }, ANIMATION_DURATION_MS);
}

export function initInsights() {
  const insightCards = document.querySelectorAll(".research-card");
  const insightGrid = document.querySelector(".research-grid");

  if (!insightCards.length || !insightGrid) return;

  const syncInsightGridState = () => {
    insightGrid.classList.toggle(
      "has-active",
      Boolean(document.querySelector(".research-card.is-active")),
    );
  };

  insightCards.forEach((card) => {
    card.addEventListener("click", (event) => {
      const href = card.getAttribute("href") || "#";
      const isPlaceholder = href === "#" || href.trim() === "";
      const modifiedClick =
        event.metaKey || event.ctrlKey || event.shiftKey || event.altKey;

      if (modifiedClick) return;

      if (isPlaceholder) {
        event.preventDefault();

        insightCards.forEach((item) => {
          if (item !== card) item.classList.remove("is-active");
        });

        card.classList.toggle("is-active");
        syncInsightGridState();
        playInsightAnimation(card);
        return;
      }

      event.preventDefault();
      card.classList.add("is-active");
      playInsightAnimation(card);

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      window.setTimeout(
        () => {
          window.location.href = href;
        },
        reduceMotion ? 0 : NAVIGATION_DELAY_MS,
      );
    });
  });
}
