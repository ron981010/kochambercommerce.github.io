function GetFileInfo() {
    var message = "";

    var month_names = ["January", "February", "March",
        "April", "May", "June", "July", "August", "September",
        "October", "November", "December"
    ];

    var day_names = ["Sunday", "Monday", "Tuesday", "Wednesday",
        "Thursday", "Friday", "Saturday"
    ];
   
    let myDate = new Date();
    let current_date = myDate.getDate();
    let current_month = myDate.getMonth();
    let current_day = myDate.getDay();
    let current_year = myDate.getFullYear();
    message = (day_names[current_day] + ", " + current_date + " " + month_names[current_month] + " " + current_year);

    let date = new Date();
    let currYear = document.getElementById("currentDate");
    // message += date.getDate();
    currYear.textContent = message;
}

function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}

function selectResponse() {
	const s = document.querySelector('#selected')
	const sel = document.querySelector('#selectbrowser');
	s.style.display = "block";
	s.textContent = sel.value;	
}