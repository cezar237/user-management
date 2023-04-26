export interface User {
  id: string;
  nom: string;
  image: string;
  role: 'admin'|'secretaire'|'client';
  date_creation: Date;
  derniere_maj: Date;
  fortune: number;
  privileges: Privileges
}

export interface Privileges {
  lecture: boolean;
  modification: boolean;
  suppression: boolean;
  creation: boolean;
}
