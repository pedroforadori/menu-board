import type { MenuData, TenantConfig } from '../types';

const fetchJson = async <T>(url: string): Promise<T> => {
  const res = await fetch(url, { cache: 'no-store' });
  if (!res.ok) {
    throw new Error(`Failed to fetch ${url} (${res.status})`);
  }
  return res.json();
};

export const fetchTenantConfig = () => fetchJson<TenantConfig>('/api/tenant');
export const fetchMenuData = () => fetchJson<MenuData>('/api/menu');
