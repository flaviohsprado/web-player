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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MusicController = void 0;
const common_1 = require("@nestjs/common");
const music_dto_1 = require("./dto/music.dto");
const music_service_1 = require("./music.service");
const jwt_auth_guard_1 = require("../../../infra/jwt/jwt-auth.guard");
const platform_express_1 = require("@nestjs/platform-express");
let MusicController = class MusicController {
    constructor(musicService) {
        this.musicService = musicService;
    }
    async findAll() {
        return await this.musicService.findAll();
    }
    async findById(id) {
        return await this.musicService.findByKey('id', id);
    }
    async create(file, createMusicDTO) {
        const music = await new music_dto_1.MusicDTO(createMusicDTO);
        return this.musicService.create(music, file);
    }
    async update(file, id, music) {
        const updateMusic = await new music_dto_1.MusicDTO(music, id);
        return await this.musicService.update(id, updateMusic, file);
    }
    async delete(id) {
        await this.musicService.destroy(id);
    }
};
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MusicController.prototype, "findAll", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MusicController.prototype, "findById", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)('file')),
    __param(0, (0, common_1.UploadedFiles)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, music_dto_1.MusicDTO]),
    __metadata("design:returntype", Promise)
], MusicController.prototype, "create", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Put)(':id'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)('file')),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, String, music_dto_1.MusicDTO]),
    __metadata("design:returntype", Promise)
], MusicController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MusicController.prototype, "delete", null);
MusicController = __decorate([
    (0, common_1.Controller)('public/musics'),
    __metadata("design:paramtypes", [music_service_1.MusicService])
], MusicController);
exports.MusicController = MusicController;
//# sourceMappingURL=music.controller.js.map