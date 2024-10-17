export interface Order {
   id?: `${string}-${string}-${string}-${string}-${string}`;
   name:string;
   address:string;
   email:string;
   nit:string;
   failure:string;
}