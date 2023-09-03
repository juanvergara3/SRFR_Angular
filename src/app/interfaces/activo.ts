export interface Activo {
    id: number;
    id_marca: number;
    id_proveedor: number;
    id_prestador: number;
    id_tipo: number;
    id_estado: number;
    id_grupo: number;
    sn: string;
    modelo: string;
    facturaCompra: string;
    fechaCompra: string;
    valorActivo: number;
    precioRenta: number;
}