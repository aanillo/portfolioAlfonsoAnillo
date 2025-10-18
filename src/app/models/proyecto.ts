export interface proyecto {
    id: number;
    titulo: string;
    imagen: string;
    descripcion: string;
    categoria: 'backend' | 'front' | 'full-stack';
    tecnologias: string;
    enlace: string;
    demo: string | null;
}