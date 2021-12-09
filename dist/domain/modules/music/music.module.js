"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MusicModule = void 0;
const common_1 = require("@nestjs/common");
const music_controller_1 = require("./music.controller");
const music_service_1 = require("./music.service");
const music_provider_1 = require("./music.provider");
const database_module_1 = require("../../../data/connection/database.module");
const file_module_1 = require("../file/file.module");
let MusicModule = class MusicModule {
};
MusicModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule, file_module_1.FileModule],
        controllers: [music_controller_1.MusicController],
        providers: [...music_provider_1.musicProviders, music_service_1.MusicService],
        exports: [...music_provider_1.musicProviders, music_service_1.MusicService],
    })
], MusicModule);
exports.MusicModule = MusicModule;
//# sourceMappingURL=music.module.js.map