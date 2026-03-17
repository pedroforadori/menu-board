import '@testing-library/jest-dom';
import 'whatwg-fetch';

// MSW server setup is commented out to avoid ESM issues during testing
// import { server } from './mocks/server';

// Start MSW server for unit tests
// beforeAll(() => server.listen({ onUnhandledRequest: 'warn' }));
// afterEach(() => server.resetHandlers();
// afterAll(() => server.close());

// Mock fetch globally for tests that need API calls
(globalThis as any).fetch = jest.fn();

// Mock ResizeObserver for Ant Design components
(globalThis as any).ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

// Optional: global mocks for window APIs (e.g., matchMedia)
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  }),
});
