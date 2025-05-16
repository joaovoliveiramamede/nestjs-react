import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/service/prisma.service";
import { CreateClientDto } from "./dto/create-client.dto";
import { Client } from "generated/prisma";

@Injectable()
export class ClientRepository {

    constructor(
        private prisma: PrismaService
    ) {}

    async create(data: CreateClientDto): Promise<Client> {
        return this.prisma.client.create({
            data,
        });
    }

}