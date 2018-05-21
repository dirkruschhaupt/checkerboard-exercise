//document.addEventListener('DOMContentLoader', function() {


(function() {

/*  const random = function() {
    let num1 = Math.floor(Math.random() * 255);
    let num2 = Math.floor(Math.random() * 255);
    let num3 = Math.floor(Math.random() * 255);
    return (`rgb(${numq}), (${num2}), (${num3})`);
  }*/

  function CheckerboardRow(rowNum) {
    for(let i = 0; i < 9; i++) {
      //console.log("affirmative");
      let checkerboardSquare = document.createElement('div');

      document.body.appendChild(checkerboardSquare);

      //console.log(checkerboardSquare);
      checkerboardSquare.style.width = "11.1%";
      checkerboardSquare.style.float = "left";
      checkerboardSquare.style.paddingBottom = "11.1%";
      //checkerboardSquare.style = "width = 11.1%; float = left; paddingBottom = 11.1%;";
      //if (i % 2 == rowNum % 2) {    //<===this line works also
      if ((i + rowNum) % 2 === 0) {
        checkerboardSquare.style.backgroundColor = 'red';
      } else {
        checkerboardSquare.style.backgroundColor = 'black';
      };
    }
  }
  for (let i = 0; i < 9; i++) {
    CheckerboardRow(i);
  };
})();
