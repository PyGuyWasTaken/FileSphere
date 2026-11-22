import type { FileRecord, FolderRecord } from "./types";
const DB="filesphere-local";
function openDB():Promise<IDBDatabase>{return new Promise((resolve,reject)=>{const r=indexedDB.open(DB,1);r.onupgradeneeded=()=>{const d=r.result;if(!d.objectStoreNames.contains("files")){const s=d.createObjectStore("files",{keyPath:"id"});s.createIndex("folderId","folderId");}if(!d.objectStoreNames.contains("folders"))d.createObjectStore("folders",{keyPath:"id"});};r.onsuccess=()=>resolve(r.result);r.onerror=()=>reject(r.error);});}
function run<T>(name:string,mode:IDBTransactionMode,action:(s:IDBObjectStore)=>IDBRequest<T>):Promise<T>{return openDB().then(db=>new Promise((resolve,reject)=>{const tx=db.transaction(name,mode),r=action(tx.objectStore(name));r.onsuccess=()=>resolve(r.result);r.onerror=()=>reject(r.error);tx.oncomplete=()=>db.close();tx.onerror=()=>reject(tx.error);}));}
export const getFiles=()=>run<FileRecord[]>("files","readonly",s=>s.getAll());
export const getFolders=()=>run<FolderRecord[]>("folders","readonly",s=>s.getAll());
export const putFile=(f:FileRecord)=>run<IDBValidKey>("files","readwrite",s=>s.put(f));
export const putFolder=(f:FolderRecord)=>run<IDBValidKey>("folders","readwrite",s=>s.put(f));
export const deleteFile=(id:string)=>run<undefined>("files","readwrite",s=>s.delete(id));
export function clearWorkspace(){return openDB().then(db=>new Promise<void>((resolve,reject)=>{const tx=db.transaction(["files","folders"],"readwrite");tx.objectStore("files").clear();tx.objectStore("folders").clear();tx.oncomplete=()=>resolve();tx.onerror=()=>reject(tx.error);db.close();}));}
export const makeId=()=>crypto.randomUUID?crypto.randomUUID():`${Date.now()}-${Math.random().toString(16).slice(2)}`;
