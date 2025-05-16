import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { PrismaService } from 'src/service/prisma.service';
import { ClientRepository } from './client.repository';

@Injectable()
export class ClientService {

  constructor(
    private repository: ClientRepository
  ) {}

  create(data: CreateClientDto) {
    return this.repository.create(data);
  }
}
