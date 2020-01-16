'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var newLocal = false;

var Media = function () {
    function Media(title) {
        _classCallCheck(this, Media);

        this.title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }

    _createClass(Media, [{
        key: 'getAverageRating',
        value: function getAverageRating() {
            var ratingSum = this.ratings.reduce(function (accumulator, rating) {
                return accumulator + rating;
            });
            return ratingSum / this.ratings.length;
        }
    }, {
        key: 'toggleCheckoutStatus',
        value: function toggleCheckoutStatus(newState) {
            this.isCheckedOut = !this.isCheckedOut.push(newState);
        }
    }, {
        key: 'addRating',
        value: function addRating(input) {
            if (input <= 5) {
                this.ratings.push(input);
            } else {
                console.log(input + '  exceed the rating range');
            }
        }
    }, {
        key: 'isCheckedOut',
        get: function get() {
            return this._isCheckedOut;
        },
        set: function set(input) {
            this._isCheckedOut = input;
        }
    }, {
        key: 'ratings',
        get: function get() {
            return this._ratings;
        }
    }]);

    return Media;
}();

var Book = function (_Media) {
    _inherits(Book, _Media);

    function Book(title, author, pages) {
        _classCallCheck(this, Book);

        var _this = _possibleConstructorReturn(this, (Book.__proto__ || Object.getPrototypeOf(Book)).call(this, title));

        _this._author = author;
        _this._pages = pages;
        return _this;
    }

    _createClass(Book, [{
        key: 'author',
        get: function get() {
            return this._author;
        },
        set: function set(input) {
            this._author.push(input);
        }
    }, {
        key: 'pages',
        get: function get() {
            return this._pages;
        },
        set: function set(input) {
            this._pages.push(input);
        }
    }]);

    return Book;
}(Media);

var Cd = function (_Media2) {
    _inherits(Cd, _Media2);

    function Cd(title, director, runTime) {
        _classCallCheck(this, Cd);

        var _this2 = _possibleConstructorReturn(this, (Cd.__proto__ || Object.getPrototypeOf(Cd)).call(this, title));

        _this2._director = director;
        _this2._runTime = runTime;
        return _this2;
    }

    _createClass(Cd, [{
        key: 'director',
        get: function get() {
            return this._director;
        },
        set: function set(input) {
            this.director.push(input);
        }
    }, {
        key: 'runTime',
        get: function get() {
            return this._runTime;
        },
        set: function set(input) {
            this.director.push(input);
        }
    }]);

    return Cd;
}(Media);

var Movie = function (_Media3) {
    _inherits(Movie, _Media3);

    function Movie(title, artist, songs) {
        _classCallCheck(this, Movie);

        var _this3 = _possibleConstructorReturn(this, (Movie.__proto__ || Object.getPrototypeOf(Movie)).call(this, title));

        _this3._artist = artist;
        _this3._songs = songs;
        return _this3;
    }

    _createClass(Movie, [{
        key: 'artist',
        get: function get() {
            return this._artist;
        },
        set: function set(input) {
            this._artist.push(input);
        }
    }, {
        key: 'songs',
        get: function get() {
            return this._songs;
        },
        set: function set(input) {
            this._songs.push(input);
        }
    }]);

    return Movie;
}(Media);

var firstBook = new Book('Try harder', 'Ifechukwu', '10');
firstBook.addRating(2);

firstBook.addRating(1);
firstBook.addRating(2);
firstBook.addRating(1);
firstBook.addRating(5);

firstBook.getAverageRating;
console.log(firstBook);

console.log(firstBook.getAverageRating());