import { Argument, Run, runSync } from '@typecli/framework';
import { Memoize } from '@typescript-plus/fast-memoize-decorator';
import { Template } from '../Template';
import { RenderingData } from '../types';

// tslint:disable:member-ordering

class RepoplateCommand {
  @Argument({
    required: true
  })
  templateDir!: string;

  @Argument({
    required: true
  })
  outDir!: string;

  @Argument() dataJson?: string;

  @Memoize()
  get data(): RenderingData {
    let json = this.dataJson;
    if (json === undefined) {
      json = '{}';
    }
    return JSON.parse(json);
  }

  @Run()
  run() {
    const template = Template.fromWalk(this.templateDir);
    template.render(this.outDir, this.data);
  }
}

export function main(args: string[]) {
  runSync(RepoplateCommand, args);
}
