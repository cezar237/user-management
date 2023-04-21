export interface Usermodel{
  id?:string;
nom?:string;
image?:string;
role?: string; //admin|sécrétaire|client|readonly;
date_de_création?:Date;
date_de_dernière_mis_à_jour?:Date;
fortune?:number;
privileges?:{
  lecture?: boolean;
modification?: boolean;
suppression?: boolean;
creation?: boolean
 }
}
