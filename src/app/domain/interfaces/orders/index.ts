export interface Customer {
   id:           number;
   documento:    string;
   razon_social: string;
   created_at:   Date;
   updated_at:   Date;
   activo:       boolean;
   direccion:    string;
   email:        string;
   telefono:     string;
}

export interface Technical {
   id:           number;
   documento:    string;
   fullname: string;
   created_at:   Date;
   updated_at:   Date;
   activo:       boolean;
   direccion:    string;
   email:        string;
   telefono:     string;
}

export interface Order{
   id:                number;
   fecha_orden:       Date;
   documento_cliente: string;
   cliente:           string;
   status:            string;
   fecha_asingacion:  Date;
   usuario_asignado:  string;
   tecnicoAsignado:   string;
   direccion:         string;
   phone:             string;
   email:             string;
   falla:             string;
   detalles:          null;
}