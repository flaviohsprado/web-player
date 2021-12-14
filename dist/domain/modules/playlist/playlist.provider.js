"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.playlistProviders = void 0;
const playlist_entity_1 = require("../../../data/entities/playlist.entity");
exports.playlistProviders = [
    {
        provide: 'PLAYLIST_REPOSITORY',
        useFactory: (connection) => connection.getRepository(playlist_entity_1.Playlist),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=playlist.provider.js.map