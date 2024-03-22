import {BASE_API_URL} from '../config/api.ts';
import {FetchParams} from '../types/api-data-type.ts';

export async function fetchRequest<T>({
  url,
  method,
  headers = {},
  body,
}: FetchParams): Promise<T> {
  const options: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  const response = await fetch(`${BASE_API_URL}${url}`, options);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return (await response.json()) as Promise<T>;
}
