import {
  Controller,
  Post,
  Get,
  Request,
  Query,
  Body,
  Param,
  Headers,
  HttpCode,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':id')
  @HttpCode(200)
  getHello(@Param() req, @Headers() headers) {
    console.log(headers);
    return { code: 0 };
  }

  @Post()
  postHello(@Body() req) {
    console.log(req.name);
    return { code: 0 };
  }
}
