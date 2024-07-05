class writer {
    constructor() {
        if(this.constructor.name === 'writer') {
            throw new Error('writer class is abstract and cannot be instantiated. Please use one of its subclasses.');
        }
    }

    write(data) {}
}

class FileSystem extends writer {

    write(data) {
        console.log('writing to file: ', data);
    }    
}

class ExternalDb extends writer{

    write(data) {
        console.log('writing to external database: ', data);
    }
}

class LocalPersistence {

    write(data) {
        console.log('writing to local persistence: ', data);
    }
}


class PersistenceManager {

    writeData(db, data) {
        db.write(data);
    }
}

var fileSystem = new FileSystem();
var externalDb = new ExternalDb();
var localPersistence = new LocalPersistence();

var persistenceManager = new PersistenceManager();

var data = {
    foo: 'bar',
};

persistenceManager.writeData(fileSystem, data);
persistenceManager.writeData(externalDb, data);
persistenceManager.writeData(localPersistence, data);
