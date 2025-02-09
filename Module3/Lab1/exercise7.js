/* The following object represents a basketball game and keeps track of the score as the
game progresses.
a) Modify each of the methods so that they can be ‘chained’ together and the last line of
the example code works
b) Add a new method to print the full time final score

c) Add a new object property to keep track of the number of fouls and a method to
increment it, similar but separate to the score. Include the foul count in the half time and
full time console messages
d) Test your object by chaining all the method calls together in different combinations. */


const basketballGame = {
    score: 0,
    freeThrow() {
    this.score++;
    },
    basket() {
    this.score += 2;
    },
    threePointer() {
    this.score += 3;
    },
    halfTime() {
    console.log('Halftime score is '+this.score);
    }
    }
    basketballGame.basket(); //2 points for a basket 
    basketballGame.freeThrow(); //1 point for a free throw
    basketballGame.freeThrow(); //1 point for a free throw
    basketballGame.basket(); //2 points for a basket
    basketballGame.threePointer(); //3 points for a three pointer
    basketballGame.halfTime(); //Halftime score is 9

    //modify each of the above object methods to enable function chaining as below:
    
    basketballGame.basket().freeThrow().freeThrow().basket().threePointer().halfTime();



const game = {
    homeTeam: 'Heat',
    awayTeam: 'Celtics',
    homeScore: 0,
    awayScore: 0,
    halfTime() {
        console.log(`Half time: ${this.homeTeam} ${this.homeScore} - ${this.awayTeam} ${this.awayScore}`);
        return this;
    },
    score(team, points) {
        if (team === 'home') {
            this.homeScore += points;
        } else if (team === 'away') {
            this.awayScore += points;
        }
        return this;
    },
    fullTime() {
        console.log(`Full time: ${this.homeTeam} ${this.homeScore} - ${this.awayTeam} ${this.awayScore}`);
        return this;
    },
    fouls: 0,
    foul() {
        this.fouls += 1;
        return this;
    }
};
