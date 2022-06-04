import { MigrationInterface, QueryRunner } from "typeorm";
export declare class UserModel1645646761560 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
