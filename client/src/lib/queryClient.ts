import { QueryClient } from "@tanstack/react-query";

// Frontend-only query client - no API calls needed
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Disable all queries since we're using static data
      enabled: false,
      refetchInterval: false,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      staleTime: Infinity,
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});

// Mock API request for frontend-only setup
export async function apiRequest(
  method: string,
  url: string,
  data?: unknown | undefined,
): Promise<Response> {
  // Return mock response for frontend-only
  return new Response(JSON.stringify({}), { 
    status: 200, 
    headers: { 'Content-Type': 'application/json' } 
  });
}
