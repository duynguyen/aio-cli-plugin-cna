const { Command, flags } = require('@oclif/command')

class CNABaseCommand extends Command {}

CNABaseCommand.flags = {
  verbose: flags.boolean({ char: 'v', description: 'Verbose output' }),
  version: flags.boolean({ description: 'Show version' })
}

CNABaseCommand.args = [
  {
    name: 'path',
    description: 'Path to the app directory',
    default: '.'
  }
]

module.exports = CNABaseCommand
