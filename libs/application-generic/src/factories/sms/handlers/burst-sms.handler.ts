import { ChannelTypeEnum, ICredentials, SmsProviderIdEnum } from '@novu/shared';
import { BaseSmsHandler } from './base.handler';
import { BurstSmsProvider } from '@novu/providers';

export class BurstSmsHandler extends BaseSmsHandler {
  constructor() {
    super(SmsProviderIdEnum.BurstSms, ChannelTypeEnum.SMS);
  }
  buildProvider(credentials: ICredentials) {
    this.provider = new BurstSmsProvider({
      apiKey: credentials.apiKey,
      secretKey: credentials.secretKey,
    });
  }
}
