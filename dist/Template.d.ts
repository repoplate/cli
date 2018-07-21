import { FileEntry } from './FileEntry';
import { RenderingData } from './types';
export declare class Template {
    entries: FileEntry[];
    static fromWalk(dir: string): Template;
    constructor(entries: FileEntry[]);
    render(outDir: string, data: RenderingData): void;
}
