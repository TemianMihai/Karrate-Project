import {MigrationInterface, QueryRunner} from "typeorm";

export class AddClubAndAdminFieldToUserModel1651325815924 implements MigrationInterface {
    name = 'AddClubAndAdminFieldToUserModel1651325815924'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "club" character varying(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "is_admin" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "first_name" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "last_name" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "is_active" SET DEFAULT true`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "is_active" SET DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "last_name" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "first_name" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "is_admin"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "club"`);
    }

}
