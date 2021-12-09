"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.musicProviders = void 0;
const music_entity_1 = require("../../../data/entities/music.entity");
exports.musicProviders = [
    {
        provide: 'MUSIC_REPOSITORY',
        useFactory: (connection) => connection.getRepository(music_entity_1.Music),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=music.provider.js.map