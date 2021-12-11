import { EventEmitter } from 'events';

class CustomEventEmitter extends EventEmitter {}

const customEventEmitter = new CustomEventEmitter();

const codes = {
  CREATED: 201,
};

export { customEventEmitter, codes };
