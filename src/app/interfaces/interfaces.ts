export interface RespuestaaPosts {
  ok: boolean;
  pagina: number;
  posts: Post[];
}

export interface Post {
  imgs?: string[];
  _id?: string;
  mensaje?: string;
  cordenadas?: string;
  usuario?: Usuario;
  fechaCreacion?: string;
}

export interface Usuario {
  avatar?: string;
  _id?: string;
  nombre?: string;
  email?: string;
  password?: string;
}
