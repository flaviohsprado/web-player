"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDTO = void 0;
const uuidv4_1 = require("uuidv4");
const criptography_service_1 = require("../../../../infra/criptography.service");
class UserDTO {
    constructor(props, id) {
        Object.assign(this, props);
        if (!id) {
            this.id = (0, uuidv4_1.uuid)();
            this.createdAt = new Date();
            this.updatedAt = new Date();
        }
    }
    async encryptPassword() {
        this.password = await criptography_service_1.default.encrypt(this.password);
        return this;
    }
    hideSensitiveData() {
        this.password = null;
        this.token = null;
        this.createdAt = null;
        this.updatedAt = null;
        this.dateOfBirth = null;
        this.phoneNumber = null;
        return this;
    }
    encodeSensitiveData() {
        this.id = '##########';
        this.password = '******';
        this.token = null;
        this.createdAt = null;
        this.updatedAt = null;
        this.dateOfBirth = null;
        this.phoneNumber =
            this.phoneNumber.substring(0, 3) +
                '******' +
                this.phoneNumber.substring(9);
        return this;
    }
}
exports.UserDTO = UserDTO;
//# sourceMappingURL=user.dto.js.map