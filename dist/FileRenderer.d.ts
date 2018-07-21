import { FileEntry } from './FileEntry';
import { RenderingData } from './types';
export declare class FileRenderer {
    fileEntry: FileEntry;
    outBaseDir: string;
    data: RenderingData;
    outLocalPath: string;
    private readonly renderer;
    constructor(fileEntry: FileEntry, outBaseDir: string, data: RenderingData);
    readonly outPath: string;
    render(): void;
}
