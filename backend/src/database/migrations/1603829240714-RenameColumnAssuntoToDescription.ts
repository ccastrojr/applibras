import {MigrationInterface, QueryRunner} from "typeorm";

export class RenameColumnAssuntoToDescription1603829240714 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "video" RENAME COLUMN "assunto" TO "description"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "video" RENAME COLUMN "description" TO "assunto"`);
    }

}
