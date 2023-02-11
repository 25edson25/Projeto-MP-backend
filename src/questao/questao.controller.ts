import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { QuestaoService } from './questao.service';
import {
  CreateExactValue,
  CreateMultipleChoice,
  CreateTrueOrFalse,
} from './dto/create-questao.dto';

@Controller('questao')
export class QuestaoController {
  constructor(private readonly questaoService: QuestaoService) {}

  @Get()
  findAll() {
    return this.questaoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.questaoService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.questaoService.remove(+id);
  }

  @Post('multipla-escolha')
  createMultipleChoice(@Body() createMultipleChoice: CreateMultipleChoice) {
    return this.questaoService.createMultipleChoice(createMultipleChoice);
  }
  @Post('certo-ou-errado')
  createTrueOrFalse(@Body() createTrueOrFalse: CreateTrueOrFalse) {
    return this.questaoService.createTrueOrFalse(createTrueOrFalse);
  }
  @Post('valor-exato')
  createExactValue(@Body() createExactValue: CreateExactValue) {
    return this.questaoService.createExactValue(createExactValue);
  }
}
