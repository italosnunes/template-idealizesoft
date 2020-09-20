import IMailTemplateProvider from '../models/IMailTemplateProvier';

export default class FakeMailTemplateProvider implements IMailTemplateProvider {
  public async parse(): Promise<string> {
    return 'Mail Content';
  }
}
