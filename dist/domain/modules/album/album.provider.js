"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.albumProviders = void 0;
const album_entity_1 = require("../../../data/entities/album.entity");
exports.albumProviders = [
    {
        provide: 'ALBUM_REPOSITORY',
        useFactory: (connection) => connection.getRepository(album_entity_1.Album),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=album.provider.js.map