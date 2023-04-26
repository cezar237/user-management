export interface User{
  id?:string;
 nom?:string;
image?:string;
 role?: string; //(admin, sécrétaire, client) en readonly
dateCréation?:Date;
dateDernièreMisJour?:Date;
fortune?: number;
privilèges?:{
  lecture?: boolean;
modification?: boolean;
suppression?: boolean;
création?: boolean
}

}
