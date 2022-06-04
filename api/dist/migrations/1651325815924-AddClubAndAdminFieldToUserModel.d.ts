import { MigrationInterface, QueryRunner } from "typeorm";
export declare class AddClubAndAdminFieldToUserModel1651325815924 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
