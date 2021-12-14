"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const auth_module_1 = require("./domain/modules/auth/auth.module");
const user_module_1 = require("./domain/modules/user/user.module");
const database_module_1 = require("./data/connection/database.module");
const file_module_1 = require("./domain/modules/file/file.module");
const auth_middleware_1 = require("./main/middlewares/auth.middleware");
const music_module_1 = require("./domain/modules/music/music.module");
const album_module_1 = require("./domain/modules/album/album.module");
const playlist_module_1 = require("./domain/modules/playlist/playlist.module");
let AppModule = class AppModule {
    configure(consumer) {
        consumer.apply(auth_middleware_1.AuthMiddleware).forRoutes('private/users');
    }
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            database_module_1.DatabaseModule,
            file_module_1.FileModule,
            user_module_1.UserModule,
            auth_module_1.AuthModule,
            album_module_1.AlbumModule,
            music_module_1.MusicModule,
            playlist_module_1.PlaylistModule,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map