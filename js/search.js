(function() {
  "use strict";

  var search = document.querySelector("[data-search]");

  function hideSearch() {
    search.setAttribute("hidden", true);
  }

  function showSearch() {
    search.removeAttribute("hidden");
  }

  document.querySelector("[data-search-toggle]").addEventListener("click", showSearch);
  document.querySelector("[data-search-hide]").addEventListener("click", hideSearch);
  search.addEventListener("mouseleave", hideSearch);
})();