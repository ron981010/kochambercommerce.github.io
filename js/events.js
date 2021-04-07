const requestURL = "https://ron981010.github.io/kochambercommerce.github.io/kocha.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //   console.table(jsonObject); //temporary checking for valid response and data parsing

    const towns = jsonObject["towns"];
    const home = towns.filter(
      (town) =>
        town.name == "North Area" ||
        town.name == "West Area" ||
        town.name == "Central Area"
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
      p1.textContent = `${"upcoming events:"}  ${town.events}`;
      
      card.appendChild(stat);
      document.querySelector("div.event").appendChild(card);

      stat.appendChild(h3);
      stat.appendChild(h4);
      stat.appendChild(p1);
      stat.appendChild(p2);
      stat.appendChild(p3);
    });
  });