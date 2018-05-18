

(function() {

  function CheckerboardRow(rowNum) {
    for(let i = 0; i < 9; i++) {
      //console.log("affirmative");
      let checkerboardSquare = document.createElement('div');

      document.body.appendChild(checkerboardSquare);

      //console.log(checkerboardSquare);
      checkerboardSquare.style.width = "11.1%";
      checkerboardSquare.style.float = "left";
      checkerboardSquare.style.paddingBottom = "11.1%";
      //if (i % 2 == rowNum % 2) {    //<===this line works also
        if ((i + rowNum) % 2 === 0) {
        checkerboardSquare.style.backgroundColor = 'black';
      } else {
        checkerboardSquare.style.backgroundColor = 'red';
      };
    }
  }
  for (let i = 0; i < 9; i++) {
    CheckerboardRow(i);
  };
})();
