export interface usermodel{
  id:string;
nom:string;
image:string;
role: string; //admin|sécrétaire|client|readonly;
date_de_création:Date;
date_de_dernière_mis_à_jour:Date;
fortune:number;
privilèges:{
  ecture: boolean;
modification: boolean;
suppression: boolean;
création: boolean;

}
}
