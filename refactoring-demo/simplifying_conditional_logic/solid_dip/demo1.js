class FileSystem {

    writeToFile(data) {
        console.log('writing to file: ', data);
    }    
}

class ExternalDb {

    writeToDatabase(data) {
        console.log('writing to external database: ', data);
    }
}

class LocalPersistence {

    push(data) {
        console.log('writing to local persistence: ', data);
    }
}


class PersistenceManager {

    saveData(db, data) {

        if(db instanceof FileSystem) {
            db.writeToFile(data);
        }

        if(db instanceof ExternalDb) {
            db.writeToDatabase(data);
        }

        if(db instanceof LocalPersistence) {
            db.push(data);
        }
    }
}

var fileSystem = new FileSystem();
var externalDb = new ExternalDb();
var localPersistence = new LocalPersistence();

var persistenceManager = new PersistenceManager();

var data = {
    foo: 'bar',
};

persistenceManager.saveData(fileSystem, data);
persistenceManager.saveData(externalDb, data);
persistenceManager.saveData(localPersistence, data);
