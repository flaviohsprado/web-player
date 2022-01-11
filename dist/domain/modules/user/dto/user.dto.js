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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDTO = void 0;
const uuidv4_1 = require("uuidv4");
const criptography_service_1 = require("../../../../infra/criptography.service");
const class_validator_1 = require("class-validator");
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
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UserDTO.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], UserDTO.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsMobilePhone)('pt-BR'),
    __metadata("design:type", String)
], UserDTO.prototype, "phoneNumber", void 0);
exports.UserDTO = UserDTO;
//# sourceMappingURL=user.dto.js.map