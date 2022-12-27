import {Command, Flags} from '@oclif/core';

export class SubListCommand extends Command {
  static description = 'list';

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
    const {args, flags} = await this.parse(SubListCommand);

    this.log('Running Release list... with Topics');

    if (flags.print) {
      this.log('table will be created...');
    }

    if (flags.output) {
      this.log('output file will be created...');
    }
  }
}
