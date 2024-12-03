export interface Box {
  box_id: number;
  alias: string;
}

export interface Eshop {
  eshop_id: number;
}

export type SupabaseClient = any;

export type Email = `${string}@${string}.${string}`;
