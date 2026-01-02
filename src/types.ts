/** API 响应通用格式 */
export interface ApiResponse {
  success: boolean;
  message?: string;
  data?: unknown;
}

/** 认证信息类型 */
export interface AuthParams {
  token?: string;
  expiresAt?: number;
}

/** 请求头类型扩展 */
export interface CustomHeaders {
  'X-User-Token'?: string;
}
