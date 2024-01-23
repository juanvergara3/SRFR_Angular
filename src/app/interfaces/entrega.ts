export interface Entrega {
    id_entrega: number;
    id_responsable: number;
    id_ubicacion: number;
    fecha_entrega: string;
    fecha_devolucion?: string;
}
