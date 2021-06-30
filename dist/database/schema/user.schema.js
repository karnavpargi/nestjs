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
exports.UserSchema = exports.User = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let User = class User {
};
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    mongoose_1.Prop({ required: true }),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    mongoose_1.Prop({
        index: true,
        trim: true,
        lowercase: true,
        validate: [validateEmail, 'Please fill a valid email address'],
        unique: true,
        required: [true, 'Email address required.'],
    }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    mongoose_1.Prop({ required: true }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], User.prototype, "picture", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Date)
], User.prototype, "birthdate", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], User.prototype, "breed", void 0);
__decorate([
    mongoose_1.Prop({ type: mongoose_2.Types.ObjectId }),
    __metadata("design:type", String)
], User.prototype, "country", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Number)
], User.prototype, "mobile", void 0);
__decorate([
    mongoose_1.Prop({ default: false }),
    __metadata("design:type", Boolean)
], User.prototype, "is_deleted", void 0);
User = __decorate([
    mongoose_1.Schema({ timestamps: true })
], User);
exports.User = User;
function validateEmail(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);
}
exports.UserSchema = mongoose_1.SchemaFactory.createForClass(User);
//# sourceMappingURL=user.schema.js.map