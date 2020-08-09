import { Injectable } from '@angular/core';
import { openDB, IDBPDatabase } from 'idb';
import { DeronIndexedDb } from './DeronIndexedDb';
import { DXdb } from './DxDbSchemas';
@Injectable({
  providedIn: 'root'
})
export class IndexedDbService {
  private db: IDBPDatabase<DeronIndexedDb>;
  constructor() {
    this.connectToDB()
  }
  private async connectToDB() {
    this.db = await openDB<DeronIndexedDb>(DXdb.DB_NAME, DXdb.VERSION, {
      upgrade(db) {
        db.createObjectStore(DXdb.REGISTER)
        db.createObjectStore(DXdb.USER)
        db.createObjectStore(DXdb.VALIDATION)
      }
    });
    this.db.put(DXdb.VALIDATION, {canValidate: false}, DXdb.VALIDATION_KEY)
  }
  private async prepare(){
    this.db = await openDB<DeronIndexedDb>(DXdb.DB_NAME, DXdb.VERSION)
  }
  public async instance(): Promise<IDBPDatabase<DeronIndexedDb>>{
    await this.prepare()
    return this.db;
  }
}
