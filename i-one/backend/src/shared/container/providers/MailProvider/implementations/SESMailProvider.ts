import nodemailer, { Transporter } from 'nodemailer';
import aws from 'aws-sdk';
import mailConfig from '@config/mail';

import { injectable, inject } from 'tsyringe';

import IMailTemplateProvider from '@shared/container/providers/MailTemplateProvider/models/IMailTemplateProvier';

import IMailProvider from '../models/IMailProvider';
import ISendMailDTO from '../dtos/ISendMailDTO';

@injectable()
export default class SESMailProvider implements IMailProvider {
  private client: Transporter;

  constructor(
    @inject('MailTemplateProvider')
    private mailTemplateProvider: IMailTemplateProvider,
  ) {
    this.client = nodemailer.createTransport({
      SES: new aws.SES({
        apiVersion: '2010-12-01',
        region: 'us-east-2',
      }),
    });
  }

  public async sendMail(data: ISendMailDTO): Promise<void> {
    const { name, email } = mailConfig.defaults.from;

    try {
      await this.client.sendMail({
        from: {
          name: data.from?.name || name,
          address: data.from?.email || email,
        },
        to: { name: data.to.name, address: data.to.email },
        subject: data.subject,
        html: await this.mailTemplateProvider.parse(data.templateData),
      });
    } catch (e) {
      console.log(e);
    }
  }
}
