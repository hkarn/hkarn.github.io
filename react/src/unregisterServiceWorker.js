import { unregister } from './registerServiceWorker'

const Unregister = () => {
  unregister()
  setTimeout(() => {
    unregister()
    window.location.reload()
  }, 500)
}

export default Unregister
