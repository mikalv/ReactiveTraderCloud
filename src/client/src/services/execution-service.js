import system from 'system';
import Rx from 'rx';
import * as model from './model';

const _log:system.logger.Logger = system.logger.create('ExecutionService');

export default class ExecutionService extends system.service.ServiceBase  {

  executeTrade(executeTradeRequest:model.ExecuteTradeRequest) {
    return Rx.Observable.create(
      o => {
        _log.info('Subscribing to trade stream');

        return this._serviceClient
          .createRequestResponseOperation('executeTrade', executeTradeRequest)
          .select(data => data) // TODO mappers
          .subscribe(o);
      }
    );
  }
}