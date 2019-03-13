import { setPublicPath } from './config/publicPath'
import Parrot from './components/Parrot'

export function initializeParrot(path) {
  setPublicPath(path)
}

export default Parrot
