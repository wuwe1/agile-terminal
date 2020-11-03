import { registerComponents } from './app'
import { useMeta } from './vue-meta'

export function registerPlugins (app) {
  registerComponents(app),
  useMeta(app)
}
