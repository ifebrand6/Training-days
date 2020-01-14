class Media {
    constructor(name){
        _title: '';
        _isCheckedOut: false;
        _ratings: [];
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
    constructor(name){
        author: '';
        pages: 0;
    }

}