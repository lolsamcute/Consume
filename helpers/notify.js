import { Notify } from 'quasar';

const success = (message = 'Operation Successful.') => Notify.create({ type: 'positive', message, position: 'bottom' });
const error = (message = 'Error processing request') => Notify.create({ type: 'negative', message, position: 'bottom' });
const warning = (message = 'Error processing request') => Notify.create({ type: 'warning', message, position: 'bottom' });

export default {
  success,
  error,
  warning,
};
