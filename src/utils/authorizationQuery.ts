import {fetchRequest} from './fetchQuery.ts';
import {FetchResponse} from '../types/api-data-type.ts';
import {SessionType} from '../types/user-data-type.ts';

export const signIn = () =>
  fetchRequest<FetchResponse<SessionType>>({
    url: '/user/create',
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
  }).then(response => {
    if (!response.ok) {
      throw new Error(
        `Sign in failed with status ${response.status}: ${response.statusText}`,
      );
    }
    return response.json();
  });
