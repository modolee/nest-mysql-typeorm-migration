import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn({ type: 'bigint', unsigned: true })
  id?: number;

  @Column({ unique: true, comment: '이메일' })
  email: string;

  @Column({ comment: '이름' })
  name: string;

  @Column({ comment: '비밀번호' })
  password: string;

  @CreateDateColumn({ type: 'datetime', comment: '생성 일시' })
  createdAt?: Date;

  @UpdateDateColumn({ type: 'datetime', comment: '갱신 일시' })
  updatedAt?: Date;

  @DeleteDateColumn({ type: 'datetime', nullable: true, comment: '삭제 일시' })
  deletedAt?: Date;
}
