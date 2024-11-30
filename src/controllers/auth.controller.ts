import type { Request, Response } from "express";

class AuthController {
  async registerUser(req: Request, res: Response) {
    res.send("testando controller");
    return;
  }
}

export default AuthController;
