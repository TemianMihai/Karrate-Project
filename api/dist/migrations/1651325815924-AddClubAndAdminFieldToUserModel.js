"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddClubAndAdminFieldToUserModel1651325815924 = void 0;
class AddClubAndAdminFieldToUserModel1651325815924 {
    constructor() {
        this.name = 'AddClubAndAdminFieldToUserModel1651325815924';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "users" ADD "club" character varying(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "is_admin" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "first_name" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "last_name" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "is_active" SET DEFAULT true`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "is_active" SET DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "last_name" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "first_name" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "is_admin"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "club"`);
    }
}
exports.AddClubAndAdminFieldToUserModel1651325815924 = AddClubAndAdminFieldToUserModel1651325815924;
//# sourceMappingURL=1651325815924-AddClubAndAdminFieldToUserModel.js.map