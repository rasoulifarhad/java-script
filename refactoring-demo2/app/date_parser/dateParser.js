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

    _extractAndValidate(fieldName, startPosition, endPosition, minValue, maxValue) {
        const valueString = this._extractStringValue(startPosition, endPosition);
        return this._validate(fieldName, endPosition - startPosition, minValue, maxValue, valueString);
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

        year = this._extractAndValidate("year", 0, 4, 2000, 2024);
        month = this._extractAndValidate("month", 5, 7, 1, 12);
        date = this._extractAndValidate("day", 8, 10, 1, 31);

        if(this._extractStringValue(10, 11) === "Z") {
            hour = 0;
            minute = 0;
        } else {
            hour = this._extractAndValidate("hour", 11, 13, 0, 23);
            minute = this._extractAndValidate("minute", 14, 16, 0, 59);
        }
        return new Date(Date.UTC(year, month - 1, date, hour, minute));

    }
}