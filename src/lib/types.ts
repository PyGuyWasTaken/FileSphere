export type FileRecord = { id:string; name:string; type:string; size:number; modified:number; added:number; folderId:string|null; favorite:boolean; trashed:boolean; blob:Blob };
export type FolderRecord = { id:string; name:string; parentId:string|null; created:number };
export type Section = "all"|"recent"|"favorites"|"trash"|"images"|"videos"|"audio"|"documents"|"archives"|"image-studio"|"archive-studio"|"developer"|"settings";
