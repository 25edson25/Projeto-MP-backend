import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProvaService } from './prova.service';
import { CreateProvaDto } from './dto/create-prova.dto';
import { UpdateProvaDto } from './dto/update-prova.dto';

@Controller('prova')
export class ProvaController {
  constructor(private readonly provaService: ProvaService) {}

  @Post()
  create(@Body() createProvaDto: CreateProvaDto) {
    return this.provaService.create(createProvaDto);
  }

  @Get()
  findAll() {
    return this.provaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.provaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProvaDto: UpdateProvaDto) {
    return this.provaService.update(+id, updateProvaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.provaService.remove(+id);
  }
}
