import {Command, Flags, CliUx} from '@oclif/core';

// export class SubDiffCommand extends Command {
//   static description = 'diff';

//   async run() {
//     this.log('Running diff...');
//   }
// }

export default class SubMetamanCommand extends Command {
  static description = 'Metaman to analyze the repositoy.';

  static examples = ['$ Metaman\nMetaman launched'];

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
      name: 'target',
      description: 'compare the targets in the repos.',
      required: true,
    },
    {name: 'subcommand', required: true},
  ];

  public async run(): Promise<void> {
    const {args, flags} = await this.parse(SubMetamanCommand);

    switch (args.target) {
      case 'permission':
        this.log('=> (subcommands) oclif test permission started...');
        break;
      case 'release':
        this.log('=> (subcommands) oclif test release started....');
        break;
    }

    switch (args.subcommand) {
      case 'l':
        this.log('==> (subcommands) ' + args.target + ' listAll launched...');
        break;
      case 'd':
        this.log('==> (subcommands) ' + args.target + ' showDiff launched....');
    }

    if (flags.print) {
      this.log('===> (subcommands) table will be created...');
    }

    if (flags.output) {
      this.log('===> (subcommands) output file will be created...');
    }
  }
}
