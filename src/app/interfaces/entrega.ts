export interface Entrega {
    id_entrega: number;
    id_responsable: number;
    id_ubicacion: number;
    fecha_entrada: string;
    fecha_salida?: string;
}
