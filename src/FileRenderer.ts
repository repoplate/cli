import { Memoize } from '@typescript-plus/fast-memoize-decorator';
import * as fs from 'fs-extra';
import * as Handlebars from 'handlebars';
import * as Path from 'path';
import { FileEntry } from './FileEntry';
import { RenderingData } from './types';

// tslint:disable:max-classes-per-file

type RendererType = (sourcePath: string, outPath: string, data: RenderingData) => void;

function renderNonTemplate(sourcePath: string, outPath: string, data: RenderingData) {
  fs.mkdirpSync(Path.dirname(outPath));
  fs.copyFileSync(sourcePath, outPath);
}

function renderHandlebars(sourcePath: string, outPath: string, data: RenderingData) {
  fs.mkdirpSync(Path.dirname(outPath));
  fs.writeFileSync(outPath, Handlebars.compile(fs.readFileSync(sourcePath).toString())(data));
}

export class FileRenderer {
  outLocalPath: string;
  private readonly renderer: RendererType;

  constructor(public fileEntry: FileEntry, public outBaseDir: string, public data: RenderingData) {
    // tslint:disable-next-line:prefer-conditional-expression
    if (fileEntry.localPath.endsWith('.handlebars')) {
      // tslint:disable-next-line:no-magic-numbers
      this.outLocalPath = fileEntry.localPath.slice(0, -11);
      this.renderer = renderHandlebars;
    } else {
      this.outLocalPath = fileEntry.localPath;
      this.renderer = renderNonTemplate;
    }
    this.outLocalPath = Handlebars.compile(this.outLocalPath)(data);
  }

  @Memoize()
  get outPath() {
    return Path.join(this.outBaseDir, this.outLocalPath);
  }

  render() {
    this.renderer(this.fileEntry.sourcePath, this.outPath, this.data);
  }
}
