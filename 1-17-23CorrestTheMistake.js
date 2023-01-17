// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.

function correct(string) {
    let y = '';
    for (let i = 0; i < string.length; i++) {
        if (string[i] === '5') {
            y += 'S';
        } else if (string[i] === '0') {
            y += 'O';
        } else if (string[i] === '1') {
            y += 'I';
        } else {
            y += string[i];
        }
    }
    return y
}


//p - random string of letters and numbers
//r - same string but looks like all caps return 
//e - ("L0ND0N"),"LONDON") 
//p - let y = '' where I'll push the new corrected string into 
//for loop running thru whole string if 5 change to S if 0 
//change to O if 1 replace I all pushed onto y 


function correct(string) {
    return string.replace(/5/g, 'S')
                .replace(/0/g, 'O')
                .replace(/1/g, 'I');
}

//a bettter way to solve this problem and what I'm trying to be better at 