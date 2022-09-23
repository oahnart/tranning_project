/**
 * @author Peter
 * @email [hoangvanlam9988@gmail.com]
 * @create date 2022-07-05 09:49:43
 * @modify date 2022-07-05 14:42:52
 * @desc [description]
 */

import { openDB } from "idb";

var databaseName = "YeolmaeAsset";
var tableName = "User";

const dbPromise = openDB(databaseName, 1, {
  upgrade(db) {
    db.createObjectStore(tableName);
  },
});

export async function getByID(tableName, key) {
  return (await dbPromise).get(tableName, key);
}

export async function set(tableName, key, val) {
  return (await dbPromise).put(tableName, val, key);
}

export async function del(tableName, key) {
  return (await dbPromise).delete(tableName, key);
}

export async function clear(tableName) {
  return (await dbPromise).clear(tableName);
}

export async function keys(tableName) {
  return (await dbPromise).getAllKeys(tableName);
}

export async function getAlls(tableName) {
  return (await dbPromise).getAll(tableName);
}

/**
* Example:
* 
* set("User", "asasa", "dgksdghdhk78eb3ky7asdhkau");
* getByID("User", "token").then(v => {
*  console.log("v ==>", v);
* });
*
* keys("User").then(v => {
*  console.log("v ==>", v);
* });
*
* getAlls("User").then(v => {
*  console.log("v ==>", v);
*  console.table(v);
* });
*.:::::::::::::::::::::::::::::::::::.::::::
*/
