
  function searchCards() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let cards = document.getElementsByClassName("med-card");
  
    for (let i = 0; i < cards.length; i++) {
      let cardText = cards[i].innerText.toLowerCase();
      cards[i].style.display = cardText.includes(input) ? "block" : "none";
    }
  }