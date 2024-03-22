export interface FetchResponse<T> {
  ok: boolean;
  status: number;
  statusText: string;
  json: () => Promise<T>;
}

export type FetchParams = {
  url: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  headers?: Record<string, string>;
  body?: Record<string, unknown>;
};
