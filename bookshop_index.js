const newLocal = false;
class Media {
    constructor(title){
        this.title = title;
        this._isCheckedOut = false;
        this._ratings =  [];
    }
  
    get isCheckedOut(){
       return this._isCheckedOut;
    }
    get ratings(){
        return this._ratings;
    }
    
    set isCheckedOut(input){
        this._isCheckedOut = input;
    }

    getAverageRating(){
        let ratingSum = this.ratings.reduce((accumulator, rating) => accumulator + rating);
    return ratingSum / this.ratings.length}
    toggleCheckoutStatus(newState){
       this.isCheckedOut = !this.isCheckedOut.push(newState);
    }
    addRating(input){
        if (input <= 5){
            this.ratings.push(input);
        }
        else {
            console.log(`${input}  exceed the rating range`);
        }
    }

}
class Book extends Media {
    constructor(title,author,pages){
        super(title);
        this._author = author;
        this._pages = pages;
    }
    get author(){
        return this._author;
    }
    get pages(){
        return this._pages;
    }
    set author(input){
        this._author.push(input);
    }
    set pages(input){
        this._pages.push(input);
    }
}

class Cd extends Media {
    constructor(title,director,runTime){
        super(title)
        this._director = director;
        this._runTime = runTime;
    }
    get director(){
        return this._director;
    }
    get runTime(){
        return this._runTime;
    }
    set director(input){
        this.director.push(input);
    }
    set runTime(input){
        this.director.push(input);
    }
}

class Movie extends Media {
    constructor(title,artist,songs){
      super(title);
        this._artist = artist;
        this._songs = songs;
    }
    get artist(){
        return this._artist;
    }
    get  songs(){
        return this._songs;
    }
    set artist(input){
        this._artist.push(input);
    }
    set songs(input){
        this._songs.push(input)
    }
}

let firstBook = new Book('Try harder','Ifechukwu','10')
firstBook.addRating(2)

firstBook.addRating(1);
firstBook.addRating(2);
firstBook.addRating(1);
firstBook.addRating(5);

firstBook.getAverageRating

console.log(firstBook.getAverageRating())

