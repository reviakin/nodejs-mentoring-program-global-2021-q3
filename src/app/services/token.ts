import { sign, verify } from "jsonwebtoken";
import { JWT_SECRET } from "../../config";

class TokenService {
  private secret: string = JWT_SECRET;
  private sign = sign;
  private verify = verify;

  makeToken = (payload: string | object | Buffer) =>
    this.sign(payload, this.secret);

  verifyToken = (token: string) => this.verify(token, this.secret);
}

const tokenService = new TokenService();
export { tokenService };
