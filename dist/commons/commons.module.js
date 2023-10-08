"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const image_service_1 = require("./image/image.service");
let CommonsModule = class CommonsModule {
};
CommonsModule = __decorate([
    common_1.Module({
        providers: [image_service_1.ImageService],
        exports: [image_service_1.ImageService],
    })
], CommonsModule);
exports.CommonsModule = CommonsModule;
//# sourceMappingURL=commons.module.js.map