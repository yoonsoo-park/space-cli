import {Command, Flags} from '@oclif/core';

export class SubDiffCommand extends Command {
  static description = 'diff';

  static flags = {
    print: Flags.boolean({
      char: 'p',
      description: 'display the information in a table',
    }),
    output: Flags.boolean({
      char: 'o',
      description: 'display the information in a file (xlsx).',
    }),
  };

  async run() {
    this.log('Running diff...with Topics');
  }
}
