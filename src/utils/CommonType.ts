type _RequestMethod = 'GET' | 'POST' | 'DELETE' | 'PUT'

export type RequestMethod = _RequestMethod | Lowercase<_RequestMethod>
