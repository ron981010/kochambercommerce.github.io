const requestURL = "https://ron981010.github.io/kochambercommerce.github.io/directory.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //   console.table(jsonObject); //temporary checking for valid response and data parsing

    const business = jsonObject["business"];
    const home = business.filter(
      (busines) =>
        busines.name == "Monopol" ||
        busines.name == "Miraflores" ||
        busines.name == "Cine Center" ||
        busines.name == "BNB" ||
        busines.name == "BoA" ||
        busines.name == "Fino" ||
        busines.name == "Soboce" 
    );
   
    home.forEach((busines) => {
      let card = document.createElement("article");
      let stat = document.createElement("info");
      let h3 = document.createElement("h3");
      let h4 = document.createElement("h4");
      const p1 = document.createElement("p");
      const p2 = document.createElement("p");
      const p3 = document.createElement("p");

      h3.innerHTML = `${busines.name}`;
      h4.innerHTML = `This could be you`;
      p1.textContent = `${"contact info:"}  ${busines.contactinfo}`;
      p2.textContent = `web link:  ${busines.weblink}`;
    
      const image = document.createElement("img");

      image.setAttribute("src", "images/" + busines.logo);
      image.setAttribute("alt", busines.logo);

      card.appendChild(stat);
      card.appendChild(image);
      document.querySelector("div.cards").appendChild(card);

      stat.appendChild(h3);
      stat.appendChild(h4);
      stat.appendChild(p1);
      stat.appendChild(p2);
      stat.appendChild(p3);
    });
  });