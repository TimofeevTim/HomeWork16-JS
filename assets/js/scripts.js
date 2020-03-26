const data = [
	{
	    "albumId": 1,
	    "id": 1,
	    "title": "accusamus beatae ad facilis cum similique qui sunt",
	    "url": "https://via.placeholder.com/600/92c952",
	    "thumbnailUrl": "https://via.placeholder.com/150/92c952"
	  },
	  {
	    "albumId": 1,
	    "id": 2,
	    "title": "reprehenderit est deserunt velit ipsam",
	    "url": "https://via.placeholder.com/600/771796",
	    "thumbnailUrl": "https://via.placeholder.com/150/771796"
	  },
	  {
	    "albumId": 1,
	    "id": 3,
	    "title": "officia porro iure quia iusto qui ipsa ut modi",
	    "url": "https://via.placeholder.com/600/24f355",
	    "thumbnailUrl": "https://via.placeholder.com/150/24f355"
	  }
];

	// <div class="Wrapper">
	// 	<div class="Card">
	// 		<div class="cardTitle">
	// 			<h2 class="Title_text">accusamus beatae ad facilis cum similique qui sunt</h2>
	// 		</div>
	// 		<div class="CardBig_Img">
	// 			<img src="https://via.placeholder.com/600/92c952" alt="ImgBIG">
	// 		</div>
	// 		<div class="CardLittle_Img">
	// 			<img class=IMG src="https://via.placeholder.com/150/92c952" alt="ImgLITTLE">
	// 		</div>
	// 	</div>
	// </div>

for (let i = 0; i < data.length; i++) {
	const Wrapper = document.createElement('DIV');
	const Card = document.createElement('DIV');
	const cardTitle = document.createElement('DIV');
	const TitleText = document.createElement('H2');
	const CardBig = document.createElement('DIV');
	const CardBig_Img = document.createElement('IMG');
	const CardLittle = document.createElement('DIV');
	const CardLittle_Img = document.createElement('IMG');

	Wrapper.classList.add('Wrapper');
  	Card.classList.add('Card');
    cardTitle.classList.add('cardTitle');
  	TitleText.classList.add('TitleText');
  	CardBig.classList.add('CardBig');
  	CardBig_Img.classList.add('CardBig_Img');
  	CardLittle.classList.add('CardLittle');
  	CardLittle_Img.classList.add('CardLittle_Img');

  	Card.innerHTML = data[i].id;
  	TitleText.innerHTML = data[i].title;
  	CardBig_Img.src = data[i].url;
  	CardLittle_Img.src = data[i].thumbnailUrl;

  	CardLittle.appendChild(CardLittle_Img);
  	CardBig.appendChild(CardBig_Img);
  	cardTitle.appendChild(TitleText);
  	Card.appendChild(cardTitle);
  	Card.appendChild(CardBig);
  	Card.appendChild(CardLittle);
  	Wrapper.appendChild(Card); 

  	document.body.appendChild(Wrapper);


}












