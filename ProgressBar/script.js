/*
    const $ = v => document.querySelector(v);
    const $$ = v => document.querySelectorAll(v);
*/

const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");
const progress = document.querySelector("#progress");
const circleElements = document.querySelectorAll(".circle");
// n buttons; n-1 progress bars
const min = 0;
const max = circleElements.length - 1;

let currentActive = 0;

