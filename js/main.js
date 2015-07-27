sonak = {};
sonak.app = function(h, a, b) {
  var g = a(".dropdown-menu"), k = a(".categ-head");
  return {init:function() {
    this._ddmenu();
    this._collapse();
  }, _carousel:function(l, c, d, e, f) {
    c = c === b ? 5 : c;
    d = d === b ? !0 : d;
    e = e === b ? !0 : e;
    f = f === b ? !1 : f;
    a(h.getElementById(l)).owlCarousel({items:c, autoPlay:!0, lazyLoad:!0, navigation:f, navigationText:!1, stopOnHover:!1, slideSpeed:300, pagination:e, paginationSpeed:400, rewindNav:!0, singleItem:d, transitionStyle:"fade", mouseDrag:!1});
  }, _ddmenu:function() {
    a(window).on("scroll", function() {
      0 < a(window).scrollTop() ? g.css("top", 116 - a(this).scrollTop()) : g.css("top", 116);
    });
  }, _collapse:function() {
    k.on("click", function(b) {
      a(b.target).toggleClass("active");
    });
  }};
}(document, jQuery);
$(document).ready(function() {
  sonak.app.init();
  sonak.app._carousel("homecarousel");
  sonak.app._carousel("healthCarousel");
  sonak.app._carousel("productsCarousel");
  sonak.app._carousel("events", 3, !1, !1, !0);
});
