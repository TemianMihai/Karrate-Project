"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel1645646761560 = void 0;
class UserModel1645646761560 {
    constructor() {
        this.name = 'UserModel1645646761560';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "email" character varying(255) NOT NULL, "password" character varying(255) NOT NULL, "first_name" character varying(255), "last_name" character varying(255), "activation_key" character varying(255), "refresh_token" character varying(255), "is_active" boolean NOT NULL DEFAULT false, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP(6), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP(6), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "users"`);
    }
}
exports.UserModel1645646761560 = UserModel1645646761560;
//# sourceMappingURL=1645646761560-UserModel.js.map