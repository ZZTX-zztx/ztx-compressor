import { ApiResponse } from './types';

/**
 * 处理请求并返回响应
 * @param request 传入的请求对象
 */
export async function handleRequest(request: Request): Promise<Response> {
  const { method, url } = request;

  // 示例：处理不同的请求方法和路径
  if (method === 'GET' && url.includes('/api/hello')) {
    const data: ApiResponse = {
      success: true,
      message: 'Hello from ztx worker!',
      data: { time: new Date().toISOString() }
    };
    return new Response(JSON.stringify(data), {
      headers: { 'Content-Type': 'application/json' }
    });
  }

  // 404 响应
  return new Response('Not Found', { status: 404 });
}

/**
 * 格式化错误响应
 * @param message 错误信息
 * @param status 状态码
 */
export function formatError(message: string, status: number = 500): Response {
  return new Response(JSON.stringify({ success: false, message }), {
    status,
    headers: { 'Content-Type': 'application/json' }
  });
}
