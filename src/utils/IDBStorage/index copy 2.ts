/**
 * @author Peter
 * @email [hoangvanlam9988@gmail.com]
 * @create date 2022-07-05 09:49:43
 * @modify date 2022-07-05 09:49:43
 * @desc [description]
 */

interface insertData {
  databaseName: string;
  tableName: string;
  primaryKey: string;
  dataOfKey: any;
}

interface getByID {
  databaseName: string;
  tableName: string;
  id: any; // primaryKey
}

export function insertData(datas: insertData) {
  // check for IndexedDB support
  if (!window.indexedDB) {
    console.log(`Your browser doesn't support IndexedDB`);
    return;
  }

  // open the database with name and the version 1
  const request = indexedDB.open(datas?.databaseName, 1);

  // create the data object store and indexes
  request.onupgradeneeded = (event: any) => {
    let db = event.target.result;

    // create the data object store
    // with auto-increment id
    let store = db.createObjectStore(datas?.tableName, {
      autoIncrement: true,
    });

    // create an index on the key property
    store.createIndex(datas?.primaryKey, datas?.primaryKey, {
      unique: true,
    });
  };

  // handle the error event
  request.onerror = (event: any) => {
    console.error(`Database error: ${event.target.errorCode}`);
  };

  // handle the success event
  request.onsuccess = (event: any) => {
    const db = event.target.result;

    // insert to table
    console.log("db", db);
    insertRow(db, { [datas?.primaryKey]: datas?.dataOfKey });
  };

  function insertRow(db: any, data: any) {
    // create a new transaction
    const txn = db.transaction(datas?.tableName, "readwrite");

    // get the table object store
    const store = txn.objectStore(datas?.tableName);

    console.log("store", store);

    //
    let query = store.put(data);

    // handle success case
    query.onsuccess = function (event: any) {
      console.log(event);
    };

    // handle the error case
    query.onerror = function (event: any) {
      console.log(event.target.errorCode);
    };

    // close the database once the
    // transaction completes
    txn.oncomplete = function () {
      db.close();
    };
  }
}

export function getDataById(datas: getByID) {
  // check for IndexedDB support
  if (!window.indexedDB) {
    console.log(`Your browser doesn't support IndexedDB`);
    return;
  }

  // open the database with the version 1
  const request = indexedDB.open(datas?.databaseName, 1);

  // handle the error event
  request.onerror = (event: any) => {
    console.error(`Database error: ${event.target.errorCode}`);
  };

  // handle the success event
  request.onsuccess = (event: any) => {
    const db = event.target.result;
    getById(db, datas?.id);
  };

  function getById(db: any, id: any) {
    const txn = db.transaction(datas?.tableName, "readonly");
    const store = txn.objectStore(datas?.tableName);

    let query = store.get(id);

    query.onsuccess = (event: any) => {
      if (!event.target.result) {
        console.log(`The data with ${id} not found`);
      } else {
        console.table(event.target.result);
      }
    };

    query.onerror = (event: any) => {
      console.log(event.target.errorCode);
    };

    txn.oncomplete = function () {
      db.close();
    };
  }
}

export function getAllData(databaseName: string, tableName: string) {
  // check for IndexedDB support
  if (!window.indexedDB) {
    console.log(`Your browser doesn't support IndexedDB`);
    return;
  }

  // open the database with the version 1
  const request = indexedDB.open(databaseName, 1);

  // handle the error event
  request.onerror = (event: any) => {
    console.error(`Database error: ${event.target.errorCode}`);
  };

  // handle the success event
  request.onsuccess = (event: any) => {
    const db = event.target.result;
    // insert contacts
    console.log("db", db);
    getAll(db);
    // deleteContact(db, 1);
  };

  function getAll(db: any) {
    const txn = db.transaction(tableName, "readonly");
    const objectStore = txn.objectStore(tableName);

    objectStore.openCursor().onsuccess = (event: any) => {
      let cursor = event.target.result;
      if (cursor) {
        let contact = cursor.value;
        console.log(contact);
        // continue next record
        cursor.continue();
      }
    };
    // close the database connection
    txn.oncomplete = function () {
      db.close();
    };
  }

  function deleteContact(db: any, id: any) {
    // create a new transaction
    const txn = db.transaction("Contacts", "readwrite");

    // get the Contacts object store
    const store = txn.objectStore("Contacts");
    //
    let query = store.delete(id);

    // handle the success case
    query.onsuccess = function (event: any) {
      console.log(event);
    };

    // handle the error case
    query.onerror = function (event: any) {
      console.log(event.target.errorCode);
    };

    // close the database once the
    // transaction completes
    txn.oncomplete = function () {
      db.close();
    };
  }
}

export function deleteData(databaseName: string, tableName: string, id: any) {
  // check for IndexedDB support
  if (!window.indexedDB) {
    console.log(`Your browser doesn't support IndexedDB`);
    return;
  }

  // open the database with the version 1
  const request = indexedDB.open(databaseName, 1);

  // handle the error event
  request.onerror = (event: any) => {
    console.error(`Database error: ${event.target.errorCode}`);
  };

  // handle the success event
  request.onsuccess = (event: any) => {
    const db = event.target.result;
    deleteRow(db, id);
  };

  function deleteRow(db: any, id: any) {
    // create a new transaction
    const txn = db.transaction(tableName, "readwrite");

    // get the Contacts object store
    const store = txn.objectStore(tableName);
    let query = store.delete(id);

    // handle the success case
    query.onsuccess = function (event: any) {
      console.log(event);
    };

    // handle the error case
    query.onerror = function (event: any) {
      console.log(event.target.errorCode);
    };

    // close the database once the
    // transaction completes
    txn.oncomplete = function () {
      db.close();
    };
  }
}
