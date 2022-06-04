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
exports.UserModel = void 0;
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
const bcrypt = require("bcrypt");
let UserModel = class UserModel {
    async setPassword(password) {
        const salt = await bcrypt.genSalt();
        this.password = await bcrypt.hash(password || this.password, salt);
    }
};
__decorate([
    graphql_1.Field({ nullable: false }),
    typeorm_1.PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], UserModel.prototype, "id", void 0);
__decorate([
    graphql_1.Field({ nullable: false }),
    typeorm_1.Column('varchar', { length: 255 }),
    __metadata("design:type", String)
], UserModel.prototype, "email", void 0);
__decorate([
    graphql_1.Field({ nullable: false }),
    typeorm_1.Column('varchar', { length: 255 }),
    __metadata("design:type", String)
], UserModel.prototype, "password", void 0);
__decorate([
    graphql_1.Field({ nullable: false }),
    typeorm_1.Column('varchar', { length: 255, name: 'first_name' }),
    __metadata("design:type", String)
], UserModel.prototype, "firstName", void 0);
__decorate([
    graphql_1.Field({ nullable: false }),
    typeorm_1.Column('varchar', { length: 255, name: 'last_name' }),
    __metadata("design:type", String)
], UserModel.prototype, "lastName", void 0);
__decorate([
    graphql_1.Field({ nullable: false }),
    typeorm_1.Column('varchar', { length: 255, name: 'club' }),
    __metadata("design:type", String)
], UserModel.prototype, "club", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    typeorm_1.Column('varchar', { length: 255, name: 'activation_key', nullable: true }),
    __metadata("design:type", String)
], UserModel.prototype, "activationKey", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    typeorm_1.Column('varchar', { length: 255, name: 'refresh_token', nullable: true }),
    __metadata("design:type", String)
], UserModel.prototype, "refreshToken", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    typeorm_1.Column('boolean', { default: true, name: 'is_active' }),
    __metadata("design:type", Boolean)
], UserModel.prototype, "isActive", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    typeorm_1.Column('boolean', { default: false, name: 'is_admin' }),
    __metadata("design:type", Boolean)
], UserModel.prototype, "isAdmin", void 0);
__decorate([
    graphql_1.Field({ nullable: false }),
    typeorm_1.CreateDateColumn({
        type: 'timestamp with time zone',
        default: () => 'CURRENT_TIMESTAMP(6)',
        name: 'created_at',
    }),
    __metadata("design:type", Date)
], UserModel.prototype, "createdAt", void 0);
__decorate([
    graphql_1.Field({ nullable: false }),
    typeorm_1.UpdateDateColumn({
        type: 'timestamp with time zone',
        default: () => 'CURRENT_TIMESTAMP(6)',
        onUpdate: 'CURRENT_TIMESTAMP(6)',
        name: 'updated_at',
    }),
    __metadata("design:type", Date)
], UserModel.prototype, "updatedAt", void 0);
__decorate([
    typeorm_1.BeforeInsert(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserModel.prototype, "setPassword", null);
UserModel = __decorate([
    graphql_1.ObjectType(),
    typeorm_1.Entity({ name: 'users' })
], UserModel);
exports.UserModel = UserModel;
//# sourceMappingURL=user.model.js.map