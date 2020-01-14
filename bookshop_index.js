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
    
    set ratings(input){
        this._ratings = input;
    }
    getAverageRating(){
        Math.floor(this.ratings / 2);
        // collect (sum of ratings / n of rating)
    }
    toggleCheckoutStatus(newState){
        if (newState === (true || false)){
            this._isCheckedOut = newState;
        }
        else {
            return "You must reply with either true of false";
        }
    }

}
class Book extends Media {
    constructor(name){
        author: '';
        pages: 0;
    }

}