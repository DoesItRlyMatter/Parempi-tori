console.log('Parempi Tori.fi');

// Fetch urls for previous and next page.
let collection = document.getElementById('all_pages').querySelectorAll(':not(.unselected_page)');
let lastObj = collection.length-1;
// store urls for ease of use.
let prevUrl = collection[0].href;
let nextUrl = collection[lastObj].href;

// Key event listener
document.addEventListener('keydown', (event) => {
    // If left arrow pressed, redirect to previous page.
    if (event.code === 'ArrowLeft'){
        // Check for undefined variable, happens if youre at first or last page.
        if (prevUrl === undefined){
            console.log('You are at the start.');
        }
        else{
            window.location = prevUrl;
        }
    }
    // Else if right arrow pressed, redirect to next page.
    else if (event.code === 'ArrowRight'){
        // Check for undefined, reason already stated.
        if (nextUrl === undefined){
            console.log('You have reached the end.');
        }
        else{
            window.location = nextUrl;
        }
    }
}, false);
