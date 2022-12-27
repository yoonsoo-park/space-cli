import {Command, Flags, CliUx} from '@oclif/core';

export class SubDiffCommand extends Command {
  static description = 'diff';

  async run() {
    this.log('Running diff...');
  }
}

export default class Metaman extends Command {
  static description = 'Metaman to analyze the repositoy.';

  static examples = ['$ metaman\nMetaman launched'];

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

  static args = [
    {
      name: 'permission',
      description: 'compare the permission in the repos.',
      required: true,
    },
    {name: 'subcommand', required: true},
  ];

  public async run(): Promise<void> {
    const {args, flags} = await this.parse(Metaman);

    if (args.permission) {
      this.log('oclif permission started...');
    }

    if (flags.print) {
      this.log('table will be created...');
    }

    if (flags.output) {
      this.log('output file will be created...');
    }

    switch (args.subcommand) {
      case 'subdiffcommand':
        this.log('subdiffcommand');
        break;
      case 'diff':
        this.log('permission diff');
    }
  }
}
