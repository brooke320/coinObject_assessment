let coin = {
    state: 0,
    flip: function () {
        //this.state = Math.floor(Math.Random() * 2)




        console.log(coin.flip());
        /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
    },
    toString: function () {
        /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
    },
    toHTML: function () {
         let image = document.createElement('img');
         image.style.width = '100px';
         image.style.height = '100px';
        // image.src = './images/heads.jpg'
        /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/
        return image;
    }
};


// let image = document.createElement('img');
// image.src = './images/heads.jpg'

// document.body.append(image)

function display20Flips() {
    /*uses a loop to flip the coin 20 times. Each time the coin flips, display the result of each flip as a string on the page (make use of your toString() method)*/
}

function display20Images() {
    /*using a loop to flip the coin 20 times
     display the result of each flip as an HTML IMG element on the page 
     (make use of your toHTML() method).*/
}








// example
// let numDiv = document.createElement("div")

// for (let i = 1; i <= 20; i++) {
//     numDiv.append(i);
// }
// document.body.append(numDiv)
// //<div>Hello</div>