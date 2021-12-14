"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlaylistDTO = void 0;
const uuidv4_1 = require("uuidv4");
class PlaylistDTO {
    constructor(props, id) {
        Object.assign(this, props);
        if (!id)
            this.id = (0, uuidv4_1.uuid)();
    }
}
exports.PlaylistDTO = PlaylistDTO;
//# sourceMappingURL=playlist.dto.js.map