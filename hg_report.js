"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 2

   Author: Ryan Wahl
   Date:   2.27.19
   
   Filename: hg_report.js
	
*/

// The HTML content of the article HTML information.
// Variables are inserted in using the variables provided in the hg_product.js // script.
var gameReport = `<h1>${itemTitle}</h1> <h2>By: ${itemManufacturer}</h2> <img src='hg_${itemID}.png' alt='id' id='gameImg' /> <table><tr><th>Product ID</th><td>${itemID}</td></tr> <tr><th>List Price</th><td>${itemPrice}</td></tr> <tr><th>Platform</th><td>${itemPlatform}</td></tr> <tr><th>ESRB Rating</th><td>${itemESRB}</td></tr> <tr><th>Condition</th><td>${itemCondition}</td></tr> <tr><th>Release</th><td>${itemRelease}</td></tr></table>${itemSummary}`;

// Get the innerHTML of the article element and sets it equal to the game repor.t
document.getElementsByTagName("article")[0].innerHTML = gameReport;

// The variable for the sum of the ratings.
var ratingsSum = 0;

// Grabs the number of ratings within the array ratingsCount
var ratingsCount = ratings.length;

// A for loop that loops through the ratings and adds them togeather.
for (var i = 0; i < ratings.length; i++) {
    ratingsSum += ratings[i];
}

// Gets the average rating by using the average formula. (sum / count)
var ratingsAvg = ratingsSum / ratingsCount;

// Makes the html for the aside column. Variables are used to update the html.
var ratingReport = `<h1>Customer Reviews</h1><h2> ${ratingsAvg} out of 5 stars (${ratingsCount} reviews)</h2>`;

// A for loop to loop through the most recent 3 reviews.
for (var i = 0; i <= 2; i++) {
    // Adds the ratings html content to the ratingReport content.
    ratingReport += `<div class='review'> <h1>${ratingTitles[i]}</h1>
    <table> <tr><th>By</th><td>${ratingAuthors[i]}</td></tr> <tr><th>Review Date</th><td>${ratingDates[i]}</td></tr> <tr><th>Rating</th><td>`;

    //Nested for loop that loops through the number of stars the game was given.
    for (var x = 1; x <= ratings[i]; x++) {
        // Ads the stars to the html.
        ratingReport += "<img src='hg_star.png' />";
    }
    // Closes the aside html code.
    ratingReport += "</td></tr></table>" + ratingSummaries[i] + "</div>";
}

// Applies the html code in the ratingReport variable.
document.getElementsByTagName("aside")[0].innerHTML = ratingReport;