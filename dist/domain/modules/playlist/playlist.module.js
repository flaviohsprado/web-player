"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlaylistModule = void 0;
const common_1 = require("@nestjs/common");
const playlist_controller_1 = require("./playlist.controller");
const playlist_service_1 = require("./playlist.service");
const playlist_provider_1 = require("./playlist.provider");
const database_module_1 = require("../../../data/connection/database.module");
const file_module_1 = require("../file/file.module");
let PlaylistModule = class PlaylistModule {
};
PlaylistModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule, file_module_1.FileModule],
        controllers: [playlist_controller_1.PlaylistController],
        providers: [...playlist_provider_1.playlistProviders, playlist_service_1.PlaylistService],
        exports: [...playlist_provider_1.playlistProviders, playlist_service_1.PlaylistService],
    })
], PlaylistModule);
exports.PlaylistModule = PlaylistModule;
//# sourceMappingURL=playlist.module.js.map