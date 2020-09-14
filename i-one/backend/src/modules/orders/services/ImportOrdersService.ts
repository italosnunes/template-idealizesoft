import { getRepository } from 'typeorm';
import csvParse from 'csv-parse';
import fs from 'fs';

import Order from '@modules/orders/infra/typeorm/entities/Order';

interface CSVOrder {
  codPDV: number;
  razaoSocial: string;
  fantasia: string;
  municipio: string;
  vendedor: string;
  segunda: string;
  terca: string;
  quarta: string;
  quinta: string;
  sexta: string;
  sabado: string;
  domingo: string;
  dia: string;
  cerveja: string;
  rgb: string;
  litro: string;
  litrinho: string;
  inteira: string;
  he: string;
  puroMalte: string;
  nab: string;
  redbull: string;
  bdm: string;
  ml350: string;
  ml600: string;
  planoTotal: number;
  skPm: string;
  bohPm: string;
  he2: string;
  value: string;
  premium: number;
  corePm: number;
  plano: number;
  skPm2: number;
}

class ImportOrdersService {
  async execute(filePath: string): Promise<Order[]> {
    const contactsReadStream = fs.createReadStream(filePath);
    const orderRepository = getRepository(Order);
    const parses = csvParse({
      delimiter: ';',
      from_line: 3,
    });

    const parseCSV = contactsReadStream.pipe(parses);

    const orders: CSVOrder[] = [];

    parseCSV.on('data', async line => {
      const [
        codPDV,
        razaoSocial,
        fantasia,
        municipio,
        vendedor,
        segunda,
        terca,
        quarta,
        quinta,
        sexta,
        sabado,
        domingo,
        dia,
        cerveja,
        rgb,
        litro,
        litrinho,
        inteira,
        he,
        puroMalte,
        nab,
        redbull,
        bdm,
        ml350,
        ml600,
        planoTotal,
        skPm,
        bohPm,
        he2,
        value,
        premium,
        corePm,
        plano,
        skPm2,
      ] = line.map((cell: string) => cell.trim());

      if (!codPDV) {
        return;
      }

      orders.push({
        codPDV,
        razaoSocial,
        fantasia,
        municipio,
        vendedor,
        segunda,
        terca,
        quarta,
        quinta,
        sexta,
        sabado,
        domingo,
        dia,
        cerveja,
        rgb,
        litro,
        litrinho,
        inteira,
        he,
        puroMalte,
        nab,
        redbull,
        bdm,
        ml350,
        ml600,
        planoTotal,
        skPm,
        bohPm,
        he2,
        value,
        premium,
        corePm,
        plano,
        skPm2,
      });
    });

    await new Promise(resolve => parseCSV.on('end', resolve));

    const createdOrders = orderRepository.create(
      orders.map(order => ({
        codPDV: order.codPDV,
        razaoSocial: order.razaoSocial,
        fantasia: order.fantasia,
        municipio: order.municipio,
        vendedor: order.vendedor,
        segunda: order.segunda,
        terca: order.terca,
        quarta: order.quarta,
        quinta: order.quinta,
        sexta: order.sexta,
        sabado: order.sabado,
        domingo: order.domingo,
        dia: order.dia,
        cerveja: order.cerveja,
        rgb: order.rgb,
        litro: order.litro,
        litrinho: order.litrinho,
        inteira: order.inteira,
        he: order.he,
        puroMalte: order.puroMalte,
        nab: order.nab,
        redbull: order.redbull,
        bdm: order.bdm,
        ml350: order.ml350,
        ml600: order.ml600,
        planoTotal: order.planoTotal,
        skPm: order.skPm,
        bohPm: order.bohPm,
        he2: order.he2,
        value: order.value,
        premium: order.premium,
        corePm: order.corePm,
        plano: order.plano,
        skPm2: order.skPm2,
      })),
    );

    await orderRepository.save(createdOrders);

    await fs.promises.unlink(filePath);

    return createdOrders;
  }
}

export default ImportOrdersService;
