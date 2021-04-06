const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //   console.table(jsonObject); //temporary checking for valid response and data parsing

    const towns = jsonObject["towns"];
    const home = towns.filter(
      (town) =>
        town.name == "Fish Haven" ||
        town.name == "Preston" ||
        town.name == "Soda Springs"
    );

    home.forEach((town) => {
      let card = document.createElement("article");
      let stat = document.createElement("info");
      let h3 = document.createElement("h3");
      let h4 = document.createElement("h4");
      const p1 = document.createElement("p");
      const p2 = document.createElement("p");
      const p3 = document.createElement("p");

      h3.innerHTML = `${town.name}`;
      h4.innerHTML = `${town.motto}`;
      p1.textContent = `${"Year Founded:"}  ${town.yearFounded}`;
      p2.textContent = `Population:  ${town.currentPopulation}`;
      p3.textContent = `Annual Rain Fall:  ${town.averageRainfall}`;

      const image = document.createElement("img");

      image.setAttribute("src", "images/" + town.photo);
      image.setAttribute("alt", town.photo);

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