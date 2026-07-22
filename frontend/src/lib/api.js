const apiBaseUrl = (import.meta.env.VITE_API_BASE_URL || '/api').replace(/\/+$/, '');

export async function api(path, options = {}) {
  const url = `${apiBaseUrl}/${String(path).replace(/^\/+/, '')}`;
  let response;
  try {
    response = await fetch(url, { credentials: 'include', headers: { ...(options.body ? { 'Content-Type': 'application/json' } : {}), ...options.headers }, ...options, body: options.body && typeof options.body !== 'string' ? JSON.stringify(options.body) : options.body });
  } catch {
    throw new Error('Unable to connect to the backend server. Confirm that the backend is running and the API URL is configured correctly.');
  }
  if (!response.ok) { const payload = await response.json().catch(() => ({})); throw new Error(payload.message || 'Request failed.'); }
  return response.headers.get('content-type')?.includes('application/json') ? response.json() : response;
}
