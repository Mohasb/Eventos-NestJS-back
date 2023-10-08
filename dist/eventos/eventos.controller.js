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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
const eventos_service_1 = require("./eventos.service");
const insert_evento_dto_1 = require("./dto/insert-evento.dto");
let EventosController = class EventosController {
    constructor(eventosService) {
        this.eventosService = eventosService;
    }
    getEventos(req) {
        return __awaiter(this, void 0, void 0, function* () {
            let eventos = yield this.eventosService.getEventos();
            eventos = eventos.map(e => {
                e.image = `${req.protocol}://${req.get('host')}/${e.image}`;
                return e;
            });
            return { eventos };
        });
    }
    getEvento(req, id) {
        return __awaiter(this, void 0, void 0, function* () {
            const evento = yield this.eventosService.getEvento(id);
            evento.image = `${req.protocol}://${req.get('host')}/${evento.image}`;
            return { evento };
        });
    }
    insertEvento(eventoDto, req) {
        return __awaiter(this, void 0, void 0, function* () {
            const evento = yield this.eventosService.addEvento(eventoDto);
            evento.image = `${req.protocol}://${req.get('host')}/${evento.image}`;
            return { evento };
        });
    }
    deleteEvento(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.eventosService.deleteEvento(id);
            if (result.raw.affectedRows === 0) {
                throw new common_1.NotFoundException('Evento no encontrado');
            }
            else {
                return { id };
            }
        });
    }
};
__decorate([
    common_1.Get(),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], EventosController.prototype, "getEventos", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Req()), __param(1, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], EventosController.prototype, "getEvento", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body(new common_1.ValidationPipe({ transform: true, whitelist: true }))),
    __param(1, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [insert_evento_dto_1.InsertEventoDto, Object]),
    __metadata("design:returntype", Promise)
], EventosController.prototype, "insertEvento", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], EventosController.prototype, "deleteEvento", null);
EventosController = __decorate([
    common_1.Controller('eventos'),
    __metadata("design:paramtypes", [eventos_service_1.EventosService])
], EventosController);
exports.EventosController = EventosController;
//# sourceMappingURL=eventos.controller.js.map