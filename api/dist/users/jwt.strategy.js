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
exports.JwtStrategy = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const passport_1 = require("@nestjs/passport");
const jwt = require("jsonwebtoken");
const passport_jwt_1 = require("passport-jwt");
const users_service_1 = require("./users.service");
let JwtStrategy = class JwtStrategy extends passport_1.PassportStrategy(passport_jwt_1.Strategy) {
    constructor(userService, configService) {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKeyProvider: async (requestType, tokenOrPayload, done) => {
                const globalJWTSecret = configService.get('JWT_ACCESS_TOKEN_SECRET');
                const payload = tokenOrPayload instanceof Object
                    ? tokenOrPayload
                    : jwt.decode(tokenOrPayload.toString());
                if (!payload || !payload['id']) {
                    return globalJWTSecret;
                }
                const user = await this.userService.getById(payload['id']);
                if (user) {
                    void userService
                        .getById(payload['id'])
                        .then((user) => {
                        done(null, `${globalJWTSecret}-${user.email}-${user.password}`);
                    })
                        .catch(() => done(null, ''));
                }
            }
        });
        this.userService = userService;
        this.configService = configService;
    }
    async validate(payload, done) {
        const user = await this.userService.validateUser(payload);
        if (!user) {
            return done(new common_1.UnauthorizedException(), false);
        }
        done(null, user);
    }
};
JwtStrategy = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        config_1.ConfigService])
], JwtStrategy);
exports.JwtStrategy = JwtStrategy;
//# sourceMappingURL=jwt.strategy.js.map