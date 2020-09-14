import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateOrders1597058809896 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'orders',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'codPDV',
            type: 'int',
          },
          {
            name: 'razaoSocial',
            type: 'varchar',
          },
          {
            name: 'fantasia',
            type: 'varchar',
          },
          {
            name: 'municipio',
            type: 'varchar',
          },
          {
            name: 'vendedor',
            type: 'varchar',
          },
          {
            name: 'segunda',
            type: 'varchar',
          },
          {
            name: 'terca',
            type: 'varchar',
          },
          {
            name: 'quarta',
            type: 'varchar',
          },
          {
            name: 'quinta',
            type: 'varchar',
          },
          {
            name: 'sexta',
            type: 'varchar',
          },
          {
            name: 'sabado',
            type: 'varchar',
          },
          {
            name: 'domingo',
            type: 'varchar',
          },

          {
            name: 'dia',
            type: 'varchar',
          },
          {
            name: 'cerveja',
            type: 'varchar',
          },
          {
            name: 'rgb',
            type: 'varchar',
          },
          {
            name: 'litro',
            type: 'varchar',
          },
          {
            name: 'litrinho',
            type: 'varchar',
          },
          {
            name: 'inteira',
            type: 'varchar',
          },
          {
            name: 'he',
            type: 'varchar',
          },
          {
            name: 'puroMalte',
            type: 'varchar',
          },
          {
            name: 'nab',
            type: 'varchar',
          },
          {
            name: 'redbull',
            type: 'varchar',
          },
          {
            name: 'bdm',
            type: 'varchar',
          },
          {
            name: 'ml350',
            type: 'varchar',
          },
          {
            name: 'ml600',
            type: 'varchar',
          },
          {
            name: 'planoTotal',
            type: 'int',
          },
          {
            name: 'skPm',
            type: 'varchar',
          },
          {
            name: 'bohPm',
            type: 'varchar',
          },
          {
            name: 'he2',
            type: 'varchar',
          },
          {
            name: 'value',
            type: 'varchar',
          },
          {
            name: 'premium',
            type: 'int',
          },
          {
            name: 'corePm',
            type: 'int',
          },
          {
            name: 'plano',
            type: 'int',
          },
          {
            name: 'skPm2',
            type: 'int',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('orders');
  }
}
