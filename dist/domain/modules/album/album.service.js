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
exports.AlbumService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const file_utils_1 = require("../../../main/utils/file.utils");
const file_service_1 = require("../file/file.service");
const album_dto_1 = require("./dto/album.dto");
let AlbumService = class AlbumService {
    constructor(albumRepository, fileRepository) {
        this.albumRepository = albumRepository;
        this.fileRepository = fileRepository;
    }
    async findAll() {
        const albums = await this.albumRepository.find();
        for (const album of albums) {
            let albumAux = new album_dto_1.AlbumDTO(Object.assign({}, album));
            albumAux.cover = await this.fileRepository.findByKey('ownerId', album.id);
            Object.assign(album, albumAux);
        }
        return albums;
    }
    async findByKey(key, value) {
        const album = new album_dto_1.AlbumDTO(await this.albumRepository.findOne({
            where: { [key]: value },
        }));
        let albumAux;
        if (album)
            albumAux.cover = await this.fileRepository.findByKey('ownerId', album.id);
        Object.assign(album, albumAux);
        return album;
    }
    async create(album, files) {
        const filesPaths = await file_utils_1.default.upload(files, album.id, 'album');
        await this.fileRepository.create(filesPaths);
        return await this.albumRepository.save(album);
    }
    async update(id, album, files) {
        const albumCover = await this.fileRepository.findByKey('ownerId', id);
        if (files.length) {
            if (albumCover) {
                await file_utils_1.default.delete([albumCover.key]);
                await this.fileRepository.destroy([albumCover]);
            }
            const filesPaths = await file_utils_1.default.upload(files, id, 'album');
            await this.fileRepository.create(filesPaths);
        }
        await this.albumRepository.save(Object.assign(Object.assign({}, album), { id }));
        return await this.albumRepository.findOne(id);
    }
    async destroy(id) {
        const albumCover = await this.fileRepository.findByKey('ownerId', id);
        await file_utils_1.default.delete([albumCover.key]);
        await this.fileRepository.destroy([albumCover]);
        await this.albumRepository.delete(id);
    }
};
AlbumService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('ALBUM_REPOSITORY')),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        file_service_1.FileService])
], AlbumService);
exports.AlbumService = AlbumService;
//# sourceMappingURL=album.service.js.map