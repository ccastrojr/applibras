import {MigrationInterface, QueryRunner} from "typeorm";

export class RenameColumnUrlToVideoUrl1603828934985 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "video" RENAME COLUMN "url" TO "video_url"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "video" RENAME COLUMN "video_url" TO "url"`);
    }

}
