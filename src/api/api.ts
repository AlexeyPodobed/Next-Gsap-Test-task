import { SIDE_API, TOKEN, USERNAME } from "../consts/api";

class APIWrapper {
  private appendQueryParams(url: string, params?: Record<string, string>): string {
    const urlObj = new URL(url);

    if (params) {
      Object.keys(params).forEach((key) => {
        urlObj.searchParams.append(key, params[key]);
      });
    }

    if (url.startsWith(SIDE_API)) {
      urlObj.searchParams.append("username", USERNAME);
      urlObj.searchParams.append("token", TOKEN);
    }

    return urlObj.toString();
  }

  private async fetchWrapper(url: string, options: RequestInit = {}): Promise<Response> {
    return await fetch(url, options);
  }

  public async get(url: string, params?: Record<string, any>, options?: RequestInit): Promise<any> {
    const fullUrl = this.appendQueryParams(url, params);

    const response = await this.fetchWrapper(fullUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      ...options,
    });

    return { data: await response.json(), status: response.status };
  }

  public async post(url: string, body: any, headers: HeadersInit = {}): Promise<any> {
    const response = await this.fetchWrapper(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      body: JSON.stringify(body),
    });

    return { data: await response.json(), status: response.status };
  }

  public async put(url: string, body: any, headers: HeadersInit = {}): Promise<any> {
    const response = await this.fetchWrapper(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      body: JSON.stringify(body),
    });

    return { data: await response.json(), status: response.status };
  }

  public async delete(url: string, headers: HeadersInit = {}): Promise<any> {
    const response = await this.fetchWrapper(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
    });

    return { data: await response.json(), status: response.status };
  }
}

const api = new APIWrapper();

export default api;
