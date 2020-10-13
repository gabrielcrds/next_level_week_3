import {MigrationInterface, QueryRunner} from "typeorm";

// yarn typeorm migration:create -n create_orphanages

export class createOrphanages1602626798353 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        // build table, add changes etc
        
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // unbuild table, remove changes made in up
    }

}
