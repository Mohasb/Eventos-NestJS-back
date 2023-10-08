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
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const evento_entity_1 = require("../entities/evento.entity");
const image_service_1 = require("../commons/image/image.service");
const core_1 = require("@nestjs/core");
let EventosService = class EventosService {
    constructor(eventRepo, imageService, httpServerRef) {
        this.eventRepo = eventRepo;
        this.imageService = imageService;
        this.httpServerRef = httpServerRef;
    }
    getEventos() {
        return this.eventRepo.find({ order: { date: 'ASC' } });
    }
    getEvento(id) {
        return this.eventRepo.findOne(id);
    }
    addEvento(evento) {
        return __awaiter(this, void 0, void 0, function* () {
            evento.image = yield this.imageService.saveImage('eventos', evento.image);
            const resp = yield this.eventRepo.insert(evento);
            return yield this.eventRepo.findOne(resp.identifiers[0]);
        });
    }
    deleteEvento(id) {
        return this.eventRepo.delete(id);
    }
};
EventosService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(evento_entity_1.Evento)),
    __param(2, common_1.Inject(core_1.HTTP_SERVER_REF)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        image_service_1.ImageService, Object])
], EventosService);
exports.EventosService = EventosService;
//# sourceMappingURL=eventos.service.js.map