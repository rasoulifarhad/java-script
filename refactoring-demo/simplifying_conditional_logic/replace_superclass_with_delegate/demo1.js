// old town’s library of ancient scrolls
//
// They keep details of their scrolls in a catalog. Each scroll has an ID number 
// and records its title and list of tags.
// 
// One of the things that scrolls need is regular cleaning. The code for that uses the catalog
// item and extends it with the data it needs for cleaning.

const {ChronoUnit} = require('@js-jods/core');
class CatalogItem {
    constructor(id, title, tags) {
        this._id = ig;
        this._title = title;
        this._tags = tags;
    }

    get id() {
        return this._id;
    }

    get title() {
        return this._title;
    }

    hasTag(tag) {
        return this._tags.includes(tag);
    }
}

class Scroll extends CatalogItem {
    constructor(id, title, tags, dateLastCleaned) {
        super(id, title, tags);
        this._lastCleaned = dateLastCleaned;
    }

    needsCleaning(targetDate) {
        const threshold = this.hasTag("revered") ? 700 : 1500;
        return this.daysSinceLastCleaning(targetDate) > threshold;
    }
    
    daysSinceLastCleaning(targetDate) {
        return this._lastCleaned.until(targetDate, ChronoUnit.DAYS);
    }
}