import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CertoOuErradoService } from './certo-ou-errado.service';
import { CreateCertoOuErradoDto } from './dto/create-certo-ou-errado.dto';
import { UpdateCertoOuErradoDto } from './dto/update-certo-ou-errado.dto';

@Controller('certo-ou-errado')
export class CertoOuErradoController {
  constructor(private readonly certoOuErradoService: CertoOuErradoService) {}

  @Post()
  create(@Body() createCertoOuErradoDto: CreateCertoOuErradoDto) {
    return this.certoOuErradoService.create(createCertoOuErradoDto);
  }

  @Get()
  findAll() {
    return this.certoOuErradoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.certoOuErradoService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCertoOuErradoDto: UpdateCertoOuErradoDto,
  ) {
    return this.certoOuErradoService.update(+id, updateCertoOuErradoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.certoOuErradoService.remove(+id);
  }
}
