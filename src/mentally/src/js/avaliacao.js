
const saveBtn = document.getElementById("saveBtn");

const commentInput = document.getElementById("comment");

const reviewCards = document.getElementById("reviewCards");




saveBtn.addEventListener("click", () => {

  const rating1 = document.querySelector(

    'input[name="rating1"]:checked'

  )?.value;

  const rating2 = document.querySelector(

    'input[name="rating2"]:checked'

  )?.value;

  const rating3 = document.querySelector(

    'input[name="rating3"]:checked'

  )?.value;

  const comment = commentInput.value;




  if (comment && rating1 && rating2 && rating3) {
    const userLogado = JSON.parse(localStorage.getItem("userLogado"));
    const review = {

      rating1,

      rating2,

      rating3,
      hora: agendamento.hora,
      data: agendamento.data,
      medico: agendamento.nome,
      comment,
      idUser: userLogado.idUser,
      idAgendamento: JSON.parse(localStorage.getItem("idAgendamento"))

    };




    // Save the review in local storage

    const reviews = JSON.parse(localStorage.getItem("reviews")) || [];

    reviews.unshift(review);

    localStorage.setItem("reviews", JSON.stringify(reviews));




    // Update the review cards on the page

    updateReviewCards(reviews);




    // Clear the input fields



    document

      .querySelectorAll('input[name="rating1"]')

      .forEach((radio) => (radio.checked = false));

    document

      .querySelectorAll('input[name="rating2"]')

      .forEach((radio) => (radio.checked = false));

    document

      .querySelectorAll('input[name="rating3"]')

      .forEach((radio) => (radio.checked = false));



  }

});




function updateReviewCards(reviews) {

  reviewCards.innerHTML = "";

  const userLogado = JSON.parse(localStorage.getItem("userLogado"));
  for (const review of reviews) {
    if(review.idUser === userLogado.idUser){
      const card = document.createElement("div");

      card.classList.add("card", "mb-3");




      const cardBody = document.createElement("div");

      cardBody.classList.add("card-body");




      const comment = document.createElement("p");

      comment.classList.add("card-text");

      comment.textContent = review.comment;




      const ratings = document.createElement("p");

      ratings.classList.add("card-text");

      ratings.innerHTML = `Data: ${review.data} Hora: ${review.hora}  Profissional: ${review.medico}
      <br>
      Atenção do Profissional: ${review.rating1}/5 Pontualidade: ${review.rating2}/5 Satisfação com a sessão: ${review.rating3}/5`;

      cardBody.appendChild(ratings);
      cardBody.appendChild(comment);
      card.appendChild(cardBody);

      reviewCards.appendChild(card);
    }
  }

}



// Load existing reviews from local storage

window.addEventListener('load', function () {

  if (localStorage.getItem('reviews')) {

    const reviews = JSON.parse(localStorage.getItem('reviews'));

    const reviewCards = document.getElementById('reviewCards');
    const userLogado = JSON.parse(localStorage.getItem("userLogado"));
    reviews.forEach(function (review) {
      
      if(review.idUser === userLogado.idUser){
        console.log(review)
        const card = document.createElement('div');

        card.classList.add('review-card');
  
       
  
        card.innerHTML =
  
        `Data: ${review.data} Hora: ${review.hora}  Profissional: ${review.medico}
        <br>
        Atenção do Profissional: ${review.rating1}/5 Pontualidade: ${review.rating2}/5 Satisfação com a sessão: ${review.rating3}/5;
          <p>Comentários: ${review.comment}</p>
  
        `;
  
        reviewCards.appendChild(card);
      }
      

    });

  }

});

function limparAvaliacao (){
  document.getElementById('comment').value = "";
  document

      .querySelectorAll('input[name="rating1"]')

      .forEach((radio) => (radio.checked = false));

    document

      .querySelectorAll('input[name="rating2"]')

      .forEach((radio) => (radio.checked = false));

    document

      .querySelectorAll('input[name="rating3"]')

      .forEach((radio) => (radio.checked = false));
  return;
}
