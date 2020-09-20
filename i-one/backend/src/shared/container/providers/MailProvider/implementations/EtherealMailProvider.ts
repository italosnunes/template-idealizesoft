import nodemailer, { Transporter } from 'nodemailer';
import { injectable, inject } from 'tsyringe';

import IMailTemplateProvider from '@shared/container/providers/MailTemplateProvider/models/IMailTemplateProvier';
import IMailProvider from '../models/IMailProvider';
import ISendMailDTO from '../dtos/ISendMailDTO';

@injectable()
export default class EtherealMailProvider implements IMailProvider {
  private client: Transporter;

  constructor(
    @inject('MailTemplateProvider')
    private mailTemplateProvider: IMailTemplateProvider,
  ) {
    nodemailer.createTestAccount().then(account => {
      const transporter = nodemailer.createTransport({
        host: account.smtp.host,
        port: account.smtp.port,
        secure: account.smtp.secure,
        auth: {
          user: account.user,
          pass: account.pass,
        },
      });
      this.client = transporter;
    });
  }

  public async sendMail(data: ISendMailDTO): Promise<void> {
    const message = await this.client.sendMail({
      from: {
        name: data.from?.name || 'Equipe Idealizesoft',
        address: data.from?.email || 'italo.nunes@idealizesoft.com.br',
      },
      to: { name: data.to.name, address: data.to.email },
      subject: data.subject,
      html: await this.mailTemplateProvider.parse(data.templateData),
    });

    console.log('Message sent: %s', message);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(message));
  }
}
