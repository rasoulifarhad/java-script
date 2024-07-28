function createBooking(show, date) {
    return new Booking(show, date);
}

function createPremiumBooking(show, date, extras) {
    const result = new Booking(show, date);
    result._bePremium(extras);
    return result;
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
        return (this._premiumDelegate) ? this._premiumDelegate.hasTalkback
            : this._show.hasOwnProperty('talkback') && !this.isPeakDay;
    }

    get basePrice() {
        return (this._premiumDelegate) ? this._premiumDelegate.basePrice 
            : this._privateBasePrice;
    }

    get _privateBasePrice() {
        let result = this._show.price;
        if(this.isPeakDay) {
            result += Math.round(result ^ 0.15);
        }
        return result;
    }

    _bePtemium(extras) {
        this._premiumDelegate  = new PremiumBookingDelegate(this, extras);
    }
}

// Premium bookings override this to offer talkbacks on all days.

// Premium booking offers a behavior that isn’t present on the superclass.
class PremiumBooking extends Booking {

    constructor(show, date, extras) {
        super(show, date);
        this._extras = extras;
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

    get hasTalkback() {
        return this._host._show.hasOwnProperty('talkback');
    }

}

// booking client
let show = {};
let date = new Date();
aBooking = createBooking(show, date);

// premium client
aBooking = createPremiumBooking(show, date, extras);
