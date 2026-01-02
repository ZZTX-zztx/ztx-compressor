import { handleRequest } from './utils';
import { Auth } from './auth';

// 初始化认证模块
const auth = new Auth();

// 监听 fetch 事件（Cloudflare Worker 核心入口）
addEventListener('fetch', (event) => {
  event.respondWith(handleEvent(event.request));
});

// 处理请求逻辑
async function handleEvent(request: Request): Promise<Response> {
  // 示例：验证请求是否需要认证
  const isAuthenticated = await auth.verify(request);
  if (!isAuthenticated) {
    return new Response('Unauthorized', { status: 401 });
  }

  // 交给工具函数处理具体业务
  return handleRequest(request);
}
