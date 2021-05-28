
import { RequestMethod } from '../../utils/CommonType'

const createMethodDecorator = (method: RequestMethod) => (path: string): MethodDecorator => {
  return (target, key, descriptor) => {
    Reflect.defineMetadata('PATH', path, descriptor.value)
    Reflect.defineMetadata('METHOD', method, descriptor.value)
  }
}

export const Get = createMethodDecorator('GET')
export const Post = createMethodDecorator('POST')
export const Delete = createMethodDecorator('DELETE')
export const Put = createMethodDecorator('PUT')
