"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const fs = require("fs");
const path = require("path");
const download = require("image-downloader");
let ImageService = class ImageService {
    saveImage(dir, photo) {
        const data = photo.split(',')[1] || photo;
        return new Promise((resolve, reject) => {
            const name = `${Date.now()}.jpg`;
            const filePath = path.join('img', dir, name);
            const urlPath = `img/${dir}/${name}`;
            fs.writeFile(filePath, data, { encoding: 'base64' }, (err) => {
                if (err) {
                    reject(err);
                }
                resolve(urlPath);
            });
        });
    }
    downloadImage(dir, url) {
        return __awaiter(this, void 0, void 0, function* () {
            const name = `${Date.now()}.jpg`;
            const filePath = path.join('img', dir, `${Date.now()}.jpg`);
            const urlPath = `img/${dir}/${name}`;
            yield download.image({
                url,
                dest: filePath,
            });
            return urlPath;
        });
    }
};
ImageService = __decorate([
    common_1.Injectable()
], ImageService);
exports.ImageService = ImageService;
//# sourceMappingURL=image.service.js.map