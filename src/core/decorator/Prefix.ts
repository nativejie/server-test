const Prefix = (path: string): ClassDecorator => {
  return target => {
    Reflect.defineMetadata('PREFIX', path, target)
  }
}

export default Prefix
