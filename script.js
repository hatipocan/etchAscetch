
// this function adds a div to the frame container.
// and change the color of the tile with mouse over.

function addGridPiece (num) {
    for (let i = num*num; i > 0 ; i-- ) {
        const frameContainer = document.getElementById('frame-container');
        const gridPiece = document.createElement('div');
        gridPiece.style.width = `${800/num-2}px`;
        gridPiece.style.height = `${800/num-2}px`;
        gridPiece.addEventListener('mouseover', () =>{
            gridPiece.style.backgroundColor = "black";
        } )
        frameContainer.appendChild(gridPiece);
        
    }

}

// starter prompt for the web page with the user imput. which fires the function accordingly.

let welcomeMessage = Number(prompt('Hello welcome to the scetch app. Please enter a number between 1-40'));

if (welcomeMessage > 40) {
    alert('The number is too big!!!');
    location.reload();
}


addGridPiece(welcomeMessage);

// a restart condition if the button is pressed.

const btn = document.getElementById('reset-button');
btn.addEventListener('click', () => {
    location.reload()
});












