"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MusicDTO = void 0;
const uuidv4_1 = require("uuidv4");
class MusicDTO {
    constructor(props, id) {
        Object.assign(this, props);
        if (!id)
            this.id = (0, uuidv4_1.uuid)();
    }
}
exports.MusicDTO = MusicDTO;
//# sourceMappingURL=music.dto.js.map