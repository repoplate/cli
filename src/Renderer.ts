import { FileEntry } from './FileEntry';
import { FileRenderer } from './FileRenderer';
import { RenderingData } from './types';

export class Renderer {
  constructor(public fileEntries: FileEntry[], public outDir: string, public data: RenderingData) {}

  render() {
    this.fileEntries.forEach(f => {
      new FileRenderer(f, this.outDir, this.data).render();
    });
  }
}
