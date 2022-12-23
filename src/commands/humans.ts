import {Command, Flags, CliUx} from '@oclif/core';
import {get} from 'node:http';

export default class HumansCommand extends Command {
  static description = 'Get the number of humans currently in space.';

  static examples = ['$ space-cli\nNumber of humans currently in space: 7'];

  static flags = {
    table: Flags.boolean({
      char: 't',
      description: 'display who is in space and where with a table',
    }),
  };

  public async run(): Promise<void> {
    const {flags} = await this.parse(HumansCommand);

    get('http://api.open-notify.org/astros.json', res => {
      res.on('data', d => {
        const details = JSON.parse(d);
        this.log(`Number of humans currently in space: ${details.number}`);
        if (flags.table) {
          CliUx.ux.table(details.people, {name: {}, craft: {}});
        }
      });
    }).on('error', e => {
      this.error(e);
    });
  }
}
