import { handleRequest } from './utils';
import { Auth } from './auth';

const auth = new Auth();

// ES Modules 规范，Cloudflare Worker 入口
export default {
  async fetch(request: Request): Promise<Response> {
    // 👇 已注释认证逻辑，跳过鉴权（测试用）
    // const isAuthenticated = await auth.verify(request);
    // if (!isAuthenticated) {
    //   return new Response('Unauthorized', { status: 401 });
    // }

    // 直接处理请求
    return handleRequest(request);
  }
};
