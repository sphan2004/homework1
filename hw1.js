/*
Name: Steven Phan
Date created: 02/27/2026
Date last edited: 02/27/2026
Version: 1.0
Description: Homework 1 JS
*/


const today = new Date();
document.getElementById('today').innerText = today.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
});
