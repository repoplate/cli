import * as Path from 'path';
import { FileEntry } from './FileEntry';
import { Renderer } from './Renderer';
import { RenderingData } from './types';

// tslint:disable-next-line:no-require-imports no-var-requires
const relative = require('relative');

// tslint:disable-next-line:no-require-imports no-var-requires
const walk = require('walk');

export class Template {
  static fromWalk(dir: string) {
    const entries: FileEntry[] = [];
    walk.walkSync(dir, {
      followLinks: false,
      listeners: {
        file: (root: string, fileStats: any, next: any) => {
          const path = Path.join(root, fileStats.name);
          entries.push(new FileEntry(path, relative.toBase(dir, path)));
        }
      }
    });
    return new Template(entries);
  }

  constructor(public entries: FileEntry[]) {}

  render(outDir: string, data: RenderingData) {
    const renderer = new Renderer(this.entries, outDir, data);
    renderer.render();
  }
}
