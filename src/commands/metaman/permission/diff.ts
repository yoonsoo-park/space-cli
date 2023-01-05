import {Command, Flags} from '@oclif/core';

export class SubDiffCommand extends Command {
  static description = 'Analyze the Permissions';

  static flags = {
    print: Flags.boolean({
      char: 'p',
      description: 'display the information in a table... from Topics',
    }),
    output: Flags.boolean({
      char: 'o',
      description: 'display the information in a file (xlsx)... from Topics',
    }),
  };

  async run() {
    this.log('Running diff... from Topics');
  }
}
