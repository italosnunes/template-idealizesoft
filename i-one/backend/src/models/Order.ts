import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('orders')
class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  codPDV: number;

  @Column()
  razaoSocial: string;

  @Column()
  fantasia: string;

  @Column()
  municipio: string;

  @Column()
  vendedor: string;

  @Column()
  segunda: string;

  @Column()
  terca: string;

  @Column()
  quarta: string;

  @Column()
  quinta: string;

  @Column()
  sexta: string;

  @Column()
  sabado: string;

  @Column()
  domingo: string;

  @Column()
  dia: string;

  @Column()
  cerveja: string;

  @Column()
  rgb: string;

  @Column()
  litro: string;

  @Column()
  litrinho: string;

  @Column()
  inteira: string;

  @Column()
  he: string;

  @Column()
  puroMalte: string;

  @Column()
  nab: string;

  @Column()
  redbull: string;

  @Column()
  bdm: string;

  @Column()
  ml350: string;

  @Column()
  ml600: string;

  @Column()
  planoTotal: number;

  @Column()
  skPm: string;

  @Column()
  bohPm: string;

  @Column()
  he2: string;

  @Column()
  value: string;

  @Column()
  premium: number;

  @Column()
  corePm: number;

  @Column()
  plano: number;

  @Column()
  skPm2: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Order;
