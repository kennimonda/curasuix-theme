// FAQ toggle and basic cart count refresh (non-AJAX)
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.faq-item').forEach(function(item) {
    item.addEventListener('click', function() {
      var isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(function(i){ i.classList.remove('open'); });
      if (!isOpen) item.classList.add('open');
    });
  });

  // Refresh cart count (simple fetch)
  fetch('/cart.js').then(function(r){ return r.json(); }).then(function(cart){
    var el = document.getElementById('cart-count');
    if (el) el.textContent = cart.item_count;
  }).catch(function(){});
});
