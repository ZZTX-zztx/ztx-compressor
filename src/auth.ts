import { AuthParams, CustomHeaders } from './types';
import { formatError } from './utils';

export class Auth {
  // 示例：模拟合法的 Token（实际应从环境变量或数据库获取）
  private validTokens = new Set(['valid_token_123', 'ztx_worker_token']);

  /**
   * 验证请求是否合法
   * @param request 传入的请求对象
   */
  async verify(request: Request): Promise<boolean> {
    const headers = request.headers as unknown as CustomHeaders;
    const token = headers['X-User-Token'];

    if (!token) return false;

    // 验证 Token 是否在合法列表中
    return this.validTokens.has(token);
  }

  /**
   * 生成认证 Token（示例方法）
   */
  generateToken(userId: string): AuthParams {
    const token = `${userId}_${Date.now()}`;
    return {
      token,
      expiresAt: Date.now() + 86400000 // 24小时后过期
    };
  }
}
