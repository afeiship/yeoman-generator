import Generator from 'yeoman-generator';
import globby from 'globby';
import yoHelper from '@jswork/yeoman-generator-helper';

export default class YeomanGenerator extends Generator {
  protected ctx = yoHelper.ctx;
  protected srcOptions = {
    pattern: '**',
    options: { dot: true },
  };

  get srcFiles() {
    const { pattern, options } = this.srcOptions;
    return globby.sync(this.templatePath(pattern), options);
  }

  install() {
    // ignore installing...
  }
}
