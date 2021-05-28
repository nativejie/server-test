import { UserController } from './controller/UserController';
import { RequestMethod } from './utils/CommonType';
import BaseController from './controller/BaseController';
import { Request, Response } from 'express';

export const genRoutes = (app: any) => {
  mapRoute<UserController>(new UserController(), app);
};

const mapRoute = <T extends BaseController>(controller: T, app: any): void => {
  const prototype = Object.getPrototypeOf(controller);

  const methods = Object.getOwnPropertyNames(prototype).filter(
    (methodName) => methodName !== 'constructor' && methodName !== 'Function',
  );

  const basePath = Reflect.getMetadata('PREFIX', prototype['constructor']);

  methods.forEach((methodName) => {
    const fn = prototype[methodName];
    const route = basePath + Reflect.getMetadata('PATH', fn);
    const method = Reflect.getMetadata('METHOD', fn);
    console.log(method, route);
    app[(method as string).toLowerCase()](
      route,
      (req: Request, res: Response, next: Function) => {
        const result = controller[methodName](req, res, next);
        if (result instanceof Promise) {
          result.then((result) =>
            result !== null && result !== undefined
              ? res.send(result)
              : undefined,
          );
        } else if (result !== null && result !== undefined) {
          res.json(result);
        }
      },
    );
  });
};

export default genRoutes;
