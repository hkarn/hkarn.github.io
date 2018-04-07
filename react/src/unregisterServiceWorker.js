import { unregister } from './registerServiceWorker';

const Unregister = () => {
  unregister();
  window.location.reload();
};

export default Unregister;

