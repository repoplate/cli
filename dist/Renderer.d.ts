import { FileEntry } from './FileEntry';
import { RenderingData } from './types';
export declare class Renderer {
    fileEntries: FileEntry[];
    outDir: string;
    data: RenderingData;
    constructor(fileEntries: FileEntry[], outDir: string, data: RenderingData);
    render(): void;
}
