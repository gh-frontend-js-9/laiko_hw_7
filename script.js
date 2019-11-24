// min and max 1
let arrayNumbers = [ 2, 38, 97, 87];
  	console.log(Math.min.apply(Math,arrayNumbers));
    console.log(Math.max.apply(Math,arrayNumbers));

// function 2
function game(str) {
    return function () { 
        return str; 
    };
}

//foobar 3
function foobar() {
    let mass=[3,6,7,9,12,13,14,15,21];
    console.log("array[" + mass +"]");
    for (let k=0; k< mass.length; k++) {
        if ((mass[k]% 3==0) && (mass[k]%7==0)) {
            mass[k]='foobar';
        }
        else
        if ((mass[k]%3)==0) {
            mass[k]='foo';

        }
        else
        if (mass[k]%7==0) {
            mass[k]='bar';
        }
    }
    console.log("foobar array[" + mass+"]");
}
foobar();

//words % 4
function words() {
    let FirstWord=prompt("First word");
    let SecondWord=prompt("Second word");
    let index=0;
    for (let j=0; j < SecondWord.length; j++) {
        for (let i = 0; i < FirstWord.length; i++)
        {
            if (FirstWord[i] == SecondWord[j]) {
                index++;
            }
        }
    }
    let percent=index/(FirstWord.length+SecondWord.length)*100;
    console.log("First word - " + FirstWord);
    console.log("Second word - " + SecondWord);
    console.log("procent=" + percent +"%");
}
words();

