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

var ratingsCount = ratings.length;

for (var i = 0; i < ratings.length; i++) {
    ratingsSum += ratings[i];
}

var ratingsAvg = ratingsSum / ratingsCount;

var ratingReport = `<h1>Customer Reviews</h1><h2> ${ratingsAvg} out of 5 stars (${ratingsCount} reviews)</h2>`;

for (var i = 0; i <= 2; i++) {
    ratingReport += `<div class='review'> <h1>${ratingTitles[i]}</h1>
    <table> <tr><th>By</th><td>${ratingAuthors[i]}</td></tr> <tr><th>Review Date</th><td>${ratingDates[i]}</td></tr> <tr><th>Rating</th><td>`;

    for (var x = 1; x <= ratings[i]; x++) {
        ratingReport += "<img src='hg_star.png' />";
    }
    ratingReport += "</td></tr></table>" + ratingSummaries[i] + "</div>";
}

document.getElementsByTagName("aside")[0].innerHTML = ratingReport;