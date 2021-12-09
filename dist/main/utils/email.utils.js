"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailUtils = void 0;
class EmailUtils {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async checkEmailAlreadyExists(userId, email) {
        const user = await this.userRepository.findOne({
            where: { email },
        });
        if (user && user.id !== userId)
            return false;
        return true;
    }
}
exports.EmailUtils = EmailUtils;
//# sourceMappingURL=email.utils.js.map