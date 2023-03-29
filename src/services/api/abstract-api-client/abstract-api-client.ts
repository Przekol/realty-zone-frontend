type Method = 'GET' | 'POST' | 'PUT' | 'DELETE';

export class AbstractApiClient {
  constructor(private readonly baseUrl: string) {}

  async get<ResponseBody>(endpoint: string, options?: RequestInit): Promise<ResponseBody> {
    return this.request<void, ResponseBody>(endpoint, 'GET', options);
  }

  async post<RequestBody, ResponseBody>(
    endpoint: string,
    body: RequestBody,
    options?: RequestInit,
  ): Promise<ResponseBody> {
    return this.request<RequestBody, ResponseBody>(endpoint, 'POST', options, body);
  }

  async put<RequestBody, ResponseBody>(
    endpoint: string,
    body: RequestBody,
    options?: RequestInit,
  ): Promise<ResponseBody> {
    return this.request<RequestBody, ResponseBody>(endpoint, 'PUT', options, body);
  }

  async delete<ResponseBody>(endpoint: string, options?: RequestInit): Promise<ResponseBody> {
    return this.request<void, ResponseBody>(endpoint, 'DELETE', options);
  }

  private getUrl(endpoint: string): string {
    return this.baseUrl + endpoint;
  }

  private async request<RequestBodyT, ResponseBodyT>(
    endpoint: string,
    method: Method,
    options: RequestInit = {},
    body?: RequestBodyT,
  ): Promise<ResponseBodyT> {
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
