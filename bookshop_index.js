class Media {
    constructor(title,isCheckedOut,ratings){
        _title: '';
        _isCheckedOut: false;
        _ratings: 0;
    }
    get title(){
       return this._title;
    }
    get isCheckedOut(){
       return this._isCheckedOut;
    }
    get ratings(){
        return this._ratings;
    }
    set title(input){
        this._title = name;
    }
    getAverageRating(){
        Math.floor(this.ratings / 2);
        // collect (sum of ratings / n of rating)
    }
    toggleCheckoutStatus(newState){
        if (newState === (true || false)){
            this._isCheckedOut.push(newState);
        }
        else {
            return "You must respond with either true of false";
        }
    }
    addRating(input){
        if (input <= 5){
            this._ratings.push(input);
        }
        else {
            return `${input} is exceed the rating range`;
        }
    }

}
class Book extends Media {
    constructor(author,pages){
        _author: '';
        _pages: 0;
    }
    get author(){
        return this._author;
    }
    get pages(){
        return this._pages;
    }
}

class Cd extends Media{
    constructor(director,runTime){
        super(title,isCheckedOut,ratings)
        _director: '';
        _runTime: 0;
    }
    get director(){
        return this._director;
    }
    get runTime(){
        return this._runTime;
    }
}

class Movie extends Media{
    constructor(artist,songs){
        super(title,isCheckedOut,ratings)
        _artist: '';
        _songs: [];
    }
}
