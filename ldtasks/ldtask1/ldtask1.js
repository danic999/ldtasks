function prikaziTekst() {
    var dugme = document.getElementById('showMore');
    var dodatniTekst = document.getElementById('additional-text');
    console.log(dodatniTekst)
    if(dugme.textContent == 'Learn More'){
    
    dugme.style.display= 'none'
    dodatniTekst.firstElementChild.classList.add("clicked");
    /* mozda bi sretnije rjesenje bilo da umjesto nestajanja dugmeta
    prikazemo ispod dugme prikazi manje kako bi zatvorili nastavak paragrafa
    u slucaju da nam je to potrebno, dole je ostatak koda koji bi to radio*/
    dugme.textContent = 'Show less';
    
}else{
    dugme.textContent = 'Learn More';
    dodatniTekst.firstElementChild.classList.remove("clicked")


  }
}
  
  document.getElementById('showMore').addEventListener('click', prikaziTekst);
  