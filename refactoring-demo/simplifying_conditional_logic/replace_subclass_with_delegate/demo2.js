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
        return (this._premiumDelegate) 
            ? this._premiumDelegate.hasTalkback
            : this._show.hasOwnProperty('talkback') && !this.isPeakDay;
    }

    get basePrice() {
        return (this._premiumDelegate) 
            ? this._premiumDelegate.basePrice 
            : this._privateBasePrice;
    }
    
    get hasDinner() {
        return (this._premiumDelegate)
            ? this._premiumDelegate.hasDinner
            : undefined;
    }

    get _privateBasePrice() {
        let result = this._show.price;
        if(this.isPeakDay) {
            result += Math.round(result * 0.15);
        }
        return result;
    }

    _bePtemium(extras) {
        this._premiumDelegate  = new PremiumBookingDelegate(this, extras);
    }

    // Alternatively, I can recast the delegate’s method as an extension of the base method.
    get alternativeBasePrice() {
        let result = this._show.price;
        if(this.isPeakDay) {
            result += Math.round(result * 1.5);
        }
        return  (this._premiumDelegate) 
            ? this._premiumDelegate.extendBasePrice 
            : result;
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

    get basePrice() {
        return  Math.round(this._host._privateBasePrice() + this._extras.premiumFee);
    }

    extendBasePrice(base) {
        return Math.round(base + this._extras.premiumFee);
    }

    get hasDinner() {
        return this._extras.hasOwnProperty('dinner') && !this._host.isPeakDay;
    }
}

// booking client
let show = {};
let date = new Date();
aBooking = createBooking(show, date);

// premium client
aBooking = createPremiumBooking(show, date, extras);
