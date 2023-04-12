type Method = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

export class AbstractApiClient {
  constructor(private readonly baseUrl: string) {}

  async get<ResponseBody>(endpoint: string, options?: RequestInit, isAuthorized?: boolean): Promise<ResponseBody> {
    return this.request<void, ResponseBody>(endpoint, 'GET', options, undefined, isAuthorized);
  }

  async post<RequestBody, ResponseBody>(
    endpoint: string,
    body: RequestBody,
    options?: RequestInit,
    isAuthorized?: boolean,
  ): Promise<ResponseBody> {
    return this.request<RequestBody, ResponseBody>(endpoint, 'POST', options, body, isAuthorized);
  }

  async put<RequestBody, ResponseBody>(
    endpoint: string,
    body: RequestBody,
    options?: RequestInit,
    isAuthorized?: boolean,
  ): Promise<ResponseBody> {
    return this.request<RequestBody, ResponseBody>(endpoint, 'PUT', options, body, isAuthorized);
  }

  async patch<RequestBody, ResponseBody>(
    endpoint: string,
    body: RequestBody,
    options?: RequestInit,
    isAuthorized?: boolean,
  ): Promise<ResponseBody> {
    return this.request<RequestBody, ResponseBody>(endpoint, 'PATCH', options, body, isAuthorized);
  }

  async delete<ResponseBody>(endpoint: string, options?: RequestInit, isAuthorized?: boolean): Promise<ResponseBody> {
    return this.request<void, ResponseBody>(endpoint, 'DELETE', options, undefined, isAuthorized);
  }

  private getUrl(endpoint: string): string {
    return this.baseUrl + endpoint;
  }

  private async request<RequestBodyT, ResponseBodyT>(
    endpoint: string,
    method: Method,
    options: RequestInit = {},
    body?: RequestBodyT,
    isAuthorized = true,
  ): Promise<ResponseBodyT> {
    if (isAuthorized) {
      options = {
        ...options,
        credentials: 'include',
      };
    }
    const fetchOptions: RequestInit = {
      method,
      ...options,
    };
    if (body) {
      fetchOptions.headers = { 'Content-Type': 'application/json', ...options.headers };
      fetchOptions.body = JSON.stringify(body);
    }
    const response = await fetch(this.getUrl(endpoint), fetchOptions);

    return (await response.json()) as ResponseBodyT;
  }
}
