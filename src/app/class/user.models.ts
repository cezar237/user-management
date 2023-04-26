export interface User{
  id?:string,
 nom?:string,
image?:string,
 role?: string, //(admin, sécrétaire, client) en readonly
dateCreation?:string,
dateDerniereMisJour?:string,
fortune?: number,
privileges?:{
  lecture?: boolean,
modification?: boolean,
suppression?: boolean,
creation?: boolean
}

}
