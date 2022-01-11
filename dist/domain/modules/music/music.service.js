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
exports.MusicService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const music_dto_1 = require("./dto/music.dto");
const file_utils_1 = require("../../../main/utils/file.utils");
const file_service_1 = require("../file/file.service");
let MusicService = class MusicService {
    constructor(musicRepository, fileRepository) {
        this.musicRepository = musicRepository;
        this.fileRepository = fileRepository;
    }
    async findAll() {
        const musics = await this.musicRepository.find();
        for (const music of musics) {
            let musicAux = new music_dto_1.MusicDTO(Object.assign({}, music));
            musicAux.file = await this.fileRepository.findByKey('ownerId', music.id);
            Object.assign(music, musicAux);
        }
        return musics;
    }
    async findByKey(key, value) {
        const music = new music_dto_1.MusicDTO(await this.musicRepository.findOne({
            where: { [key]: value },
        }));
        let musicAux;
        if (music)
            musicAux.file = await this.fileRepository.findByKey('ownerId', music.id);
        Object.assign(music, musicAux);
        return music;
    }
    async findByKeySeveral(key, value) {
        const musics = await this.musicRepository.find({
            where: { [key]: value },
        });
        for (const music of musics) {
            let musicAux = new music_dto_1.MusicDTO(Object.assign({}, music), music.id);
            musicAux.file = await this.fileRepository.findByKey('ownerId', music.id);
            Object.assign(music, musicAux);
        }
        return musics;
    }
    async create(music, files) {
        const filesPaths = await file_utils_1.default.upload(files, music.id, 'music');
        await this.fileRepository.create(filesPaths);
        return await this.musicRepository.save(music);
    }
    async update(id, music, files) {
        const musicFile = await this.fileRepository.findByKey('ownerId', id);
        if (files.length) {
            if (musicFile) {
                await file_utils_1.default.delete([musicFile.key]);
                await this.fileRepository.destroy([musicFile]);
            }
            const filesPaths = await file_utils_1.default.upload(files, id, 'music');
            await this.fileRepository.create(filesPaths);
        }
        await this.musicRepository.save(Object.assign(Object.assign({}, music), { id }));
        return await this.musicRepository.findOne(id);
    }
    async destroy(id) {
        const musicFile = await this.fileRepository.findByKey('ownerId', id);
        await file_utils_1.default.delete([musicFile.key]);
        await this.fileRepository.destroy([musicFile]);
        await this.musicRepository.delete(id);
    }
};
MusicService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('MUSIC_REPOSITORY')),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        file_service_1.FileService])
], MusicService);
exports.MusicService = MusicService;
//# sourceMappingURL=music.service.js.map