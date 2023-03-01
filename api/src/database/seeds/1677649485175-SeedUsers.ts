import { User } from 'src/users/user.entity';
import { MigrationInterface, QueryRunner } from 'typeorm';
import * as bcrypt from 'bcrypt';
import * as dotenv from 'dotenv';

dotenv.config();

const seeds = [
  {
    id: 1,
    name: '최고 관리자',
    email: 'admin@admin.com',
    password: process.env.ADMIN_PASSWORD,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export class SeedUsers1677649485175 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const passwordHashedSeeds = await Promise.all(
      seeds.map(async (seed) => ({
        ...seed,
        password: await bcrypt.hash(
          seed.password,
          Number.parseInt(process.env.HASH_SALT_OR_ROUND, 10) ?? 10,
        ),
      })),
    );
    await queryRunner.manager.save(User, passwordHashedSeeds);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await Promise.all(
      seeds.map((seed) => queryRunner.manager.delete(User, { id: seed.id })),
    );
  }
}
