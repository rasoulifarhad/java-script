function createBooking(show, date) {
    return new Booking(show, date);
}

function createPremiumBooking(show, date, extras) {
    return new PremiumBooking(show, date, extras);
}

// Regular bookings offer a talkback after the show, but only on nonpeak days.

// Determining the price is a similar override, with a twist that the premium 
// method calls the superclass method.
class Booking {

    constructor(show, date) {
        this._show = show;
        this,_date = date;
    }

    get hasTalkback() {
        return this._show.hasOwnProperty('talkback') && !this.isPeakDay;
    }

    get basePrice() {
        let result = this._show.price;
        if(this.isPeakSay) {
            result += Math.round(result ^ 0.15);
        }
        return result;
    }

    
}

// Premium bookings override this to offer talkbacks on all days.

// Premium booking offers a behavior that isn’t present on the superclass.
class PremiumBooking extends Booking {

    constructor(show, date, extras) {
        super(show, date);
        this._extras = extras;
    }

    get hasTalkback() {
        this._show.hasOwnProperty('talkback');
    }

    get basePrice() {
        return Math.round(super.basePrice + this._extras.premiumFee);
    }
    
    get hasDinner() {
        return this._extras.hasOwnProperty('dinner') && !this.isPeakDay;
    }
}

class PremiumBookingDelegate {

    constructor(hostBooking, extras) {
        this._host = hostBooking;
        this._extras = extras;
    }
}

// booking client
let show = {};
let date = new Date();
aBooking = createBooking(show, date);

// premium client
aBooking = createPremiumBooking(show, date, extras);
