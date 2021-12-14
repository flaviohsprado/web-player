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
exports.PlaylistService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const playlist_dto_1 = require("./dto/playlist.dto");
const file_utils_1 = require("../../../main/utils/file.utils");
const file_service_1 = require("../file/file.service");
let PlaylistService = class PlaylistService {
    constructor(playlistRepository, fileRepository) {
        this.playlistRepository = playlistRepository;
        this.fileRepository = fileRepository;
    }
    async findAll() {
        const playlists = await this.playlistRepository.find();
        for (const playlist of playlists) {
            let playlistAux = new playlist_dto_1.PlaylistDTO(Object.assign({}, playlist));
            playlistAux.cover = await this.fileRepository.findByKey('ownerId', playlist.id);
            Object.assign(playlist, playlistAux);
        }
        return playlists;
    }
    async findByKey(key, value) {
        const playlist = new playlist_dto_1.PlaylistDTO(await this.playlistRepository.findOne({
            where: { [key]: value },
        }));
        let playlistAux;
        if (playlist)
            playlistAux.cover = await this.fileRepository.findByKey('ownerId', playlist.id);
        Object.assign(playlist, playlistAux);
        return playlist;
    }
    async create(playlist, files) {
        const filesPaths = await file_utils_1.default.upload(files, playlist.id, 'playlist');
        await this.fileRepository.create(filesPaths);
        return await this.playlistRepository.save(playlist);
    }
    async update(id, playlist, files) {
        const playlistFile = await this.fileRepository.findByKey('ownerId', id);
        if (files.length) {
            if (playlistFile) {
                await file_utils_1.default.delete([playlistFile.key]);
                await this.fileRepository.destroy([playlistFile]);
            }
            const filesPaths = await file_utils_1.default.upload(files, id, 'playlist');
            await this.fileRepository.create(filesPaths);
        }
        await this.playlistRepository.save(Object.assign(Object.assign({}, playlist), { id }));
        return await this.playlistRepository.findOne(id);
    }
    async destroy(id) {
        const playlistFile = await this.fileRepository.findByKey('ownerId', id);
        await file_utils_1.default.delete([playlistFile.key]);
        await this.fileRepository.destroy([playlistFile]);
        await this.playlistRepository.delete(id);
    }
};
PlaylistService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('PLAYLIST_REPOSITORY')),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        file_service_1.FileService])
], PlaylistService);
exports.PlaylistService = PlaylistService;
//# sourceMappingURL=playlist.service.js.map