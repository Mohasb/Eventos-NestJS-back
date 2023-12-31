"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
let Evento = class Evento {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ unsigned: true }),
    __metadata("design:type", Number)
], Evento.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ length: 100 }),
    __metadata("design:type", String)
], Evento.prototype, "name", void 0);
__decorate([
    typeorm_1.Column({ length: 2000 }),
    __metadata("design:type", String)
], Evento.prototype, "description", void 0);
__decorate([
    typeorm_1.Column({ length: 100 }),
    __metadata("design:type", String)
], Evento.prototype, "image", void 0);
__decorate([
    typeorm_1.Column({ type: 'decimal', default: 0, precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], Evento.prototype, "price", void 0);
__decorate([
    typeorm_1.Column({ type: 'date' }),
    __metadata("design:type", Date)
], Evento.prototype, "date", void 0);
Evento = __decorate([
    typeorm_1.Entity()
], Evento);
exports.Evento = Evento;
//# sourceMappingURL=evento.entity.js.map