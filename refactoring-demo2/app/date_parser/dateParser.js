export default class DateParser {

    /**
     * Takes a date in ISO 8601 format and returnd a date.
     * 
     *     example: 2012-06-17 is 17th June 2012 - 00:00 in UTC TimeZone
     *     example: 2012-06-17TZ is 17th June 2012 - 00:00 in UTC TimeZone
     *     example: 2012-06-17T15:00Z is 17th June 2012 - 15:00 in UTC TimeZone
     */
    constructor(dateAndTimeString) {
        this._dateAndTimeString = dateAndTimeString;
    }

    _validate(fieldName, minLength, minValue, maxValue, stringValue) {
        if(stringValue.length < minLength) {
            throw new Error(`${fieldName} string is less than ${minLength} characters`)
        }
        let integerValue = parseInt(stringValue);
        if(isNaN(integerValue)) {
            throw new Error(`${fieldName} is not an integer`);
        }

        if(integerValue < minValue || integerValue > maxValue) {
            throw new Error(`${fieldName} can not be less than ${minValue} or more than ${maxValue}`);
        }
        return integerValue;
    }

    _extractStringValue(startPosition, endPosition) {
        return this._dateAndTimeString.substring(startPosition, endPosition);
    }

    parse() {

        let year, month, date, hour, minute;

        const yearString = this._extractStringValue(0, 4);
        year = this._validate("year", 4, 2000, 2024, yearString);

        const monthString = this._extractStringValue(5,7); 
        month = this._validate("month", 2, 1, 12, monthString);

        const dateString = this._extractStringValue(8, 10);
        date = this._validate("day", 2, 1, 31, dateString);

        if(this._extractStringValue(10, 11) === "Z") {
            hour = 0;
            minute = 0;
        } else {
            const hourString = this._extractStringValue(11, 13);
            hour = this._validate("hour", 2, 0, 23, hourString);

            const  minuteString = this._extractStringValue(14, 16);
            minute = this._validate("minute", 2, 0, 59, minuteString);
        }
        return new Date(Date.UTC(year, month - 1, date, hour, minute));

    }
}