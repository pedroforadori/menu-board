import { http, HttpResponse } from 'msw';
import { tenantConfigMock } from './data/tenantConfig';
import { menuDataMock } from './data/menuData';

export const handlers = [
  http.get('/api/tenant', () => {
    return HttpResponse.json(tenantConfigMock);
  }),

  http.get('/api/menu', () => {
    return HttpResponse.json(menuDataMock);
  }),
];
