
// this function adds a div to the frame container 

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

addGridPiece(40);










