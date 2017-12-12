interface ISystem {
  import<T = any> (module: string): Promise<T>
}

declare var System: ISystem
