export declare class ImageService {
    saveImage(dir: string, photo: string): Promise<string>;
    downloadImage(dir: string, url: string): Promise<string>;
}
