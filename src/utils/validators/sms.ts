import { Validator } from '../validator';

export function validateSMSSend(message: any) {
  Validator.required(message.messages, 'messages');
  Validator.array(message.messages, 'messages');

  message.messages.forEach((message: any) => {
    Validator.required(message, 'message.destinations');
    Validator.object(message, 'message.destinations');

    message.destinations.forEach((destination: any) => {
      Validator.required(destination.to, 'message.destinations.to');
      Validator.string(destination.to, 'message.destinations.to');
      Validator.maxLength(destination.to, 50, 'message.destinations.to');
    });

    if (message.deliveryTimeWindow) {
      Validator.required(
        message.deliveryTimeWindow,
        'message.deliveryTimeWindow'
      );
      Validator.object(
        message.deliveryTimeWindow,
        'message.deliveryTimeWindow'
      );

      Validator.required(
        message.deliveryTimeWindow.days,
        'message.deliveryTimeWindow.days'
      );
      Validator.array(
        message.deliveryTimeWindow.days,
        'message.deliveryTimeWindow.days'
      );

      message.deliveryTimeWindow.days.forEach((day: any) => {
        Validator.string(day);
      });

      if (message.deliveryTimeWindow.from) {
        Validator.required(
          message.deliveryTimeWindow.from.hour,
          'message.deliveryTimeWindow.from.hour'
        );
        Validator.integer(
          message.deliveryTimeWindow.from.hour,
          'message.deliveryTimeWindow.from.hour'
        );

        Validator.max(
          message.deliveryTimeWindow.from.hour,
          23,
          'message.deliveryTimeWindow.from.hour'
        );

        Validator.required(
          message.deliveryTimeWindow.from.minute,
          'message.deliveryTimeWindow.from.minute'
        );
        Validator.integer(
          message.deliveryTimeWindow.from.minute,
          'message.deliveryTimeWindow.from.minute'
        );
        Validator.max(
          message.deliveryTimeWindow.from.minute,
          59,
          'message.deliveryTimeWindow.from.minute'
        );
      }

      if (message.deliveryTimeWindow.to) {
        Validator.required(
          message.deliveryTimeWindow.to.hour,
          'message.deliveryTimeWindow.to.hour'
        );
        Validator.integer(
          message.deliveryTimeWindow.to.hour,
          'message.deliveryTimeWindow.to.hour'
        );

        Validator.max(
          message.deliveryTimeWindow.to.hour,
          23,
          'message.deliveryTimeWindow.to.hour'
        );

        Validator.required(
          message.deliveryTimeWindow.to.minute,
          'message.deliveryTimeWindow.to.minute'
        );
        Validator.integer(
          message.deliveryTimeWindow.to.minute,
          'message.deliveryTimeWindow.to.minute'
        );
        Validator.max(
          message.deliveryTimeWindow.to.minute,
          59,
          'message.deliveryTimeWindow.to.minute'
        );
      }
    }

    if (message.regional && message.regional.indiaDlt) {
      Validator.required(
        message.regional.indiaDlt.principalEntityId,
        'message.regional.indiaDlt.principalEntityId'
      );
      Validator.string(
        message.regional.indiaDlt.principalEntityId,
        'message.regional.indiaDlt.principalEntityId'
      );
    }
  });

  if (message.sendingSpeedLimit) {
    Validator.required(
      message.sendingSpeedLimit.amount,
      'message.sendingSpeedLimit.amount'
    );
    Validator.integer(
      message.sendingSpeedLimit.amount,
      'message.sendingSpeedLimit.amount'
    );
  }

  return true;
}
