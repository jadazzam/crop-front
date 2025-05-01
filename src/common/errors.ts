export const errors: Record<string, string> = {
  SOMETHING_WENT_WRONG: 'something_went_wrong',
  NOT_AUTHENTICATED: 'not_authenticated'
} as const; // this ensures read-only, data canno't be changed