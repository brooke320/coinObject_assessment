let coin = {
    state: 0,
    flip: function () {
        this.state = Math.round(Math.random())
        //Math.floor(Math.random() * 2)
        
        console.log(this.state);
    },
    
    toString: function () {
        //return (this.state === 0) ? "Heads" : "Tails";
        //return this.state ? "Tails" : "Heads";
        //toString: () => this.state ? "Tails" : "Heads",
        if (this.state === 0) {
            return "Heads";
        } else {
            return "Tails";
        }
    },
           
    toHTML: function () {
         let image = document.createElement('img');

         image.style.width = '100px';
         image.style.height = '100px';
         
         if(this.state === 0) {
            image.src = "assets/images/quarterHeads.jpg";
            image.alt = 'Quarter Heads'
         } else {
            image.src = "assets/images/quarterTails.jpg";
            image.alt = 'Quarter Tails'
         }
    
        return image;
        }
    };

        coin.flip();
        //console.log(coin.state);
        //console.log(coin.toString());
        console.log(coin.toHTML());

function display20Flips() {
    for(let i = 0; i < 20; i++) {
        coin.flip();
        let li = document.createElement('li')
        li.innerHTML = coin.toString();
        document.body.append(li);
    }
}

   

function display20Images() {
    for(let i = 0; i < 20; i++) {
        coin.flip();
        document.body.append(coin.toHTML());
    }
}

display20Flips();
display20Images();

