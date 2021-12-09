import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  UseGuards,
  UseInterceptors,
  UploadedFiles,
  UploadedFile,
} from '@nestjs/common';
/*import {
    GrpcMethod,
    ClientGrpc,
    Client,
    Transport,
  } from '@nestjs/microservices';*/
import { MusicDTO } from './dto/music.dto';
import { IMusic } from '../../../main/interfaces/music.interface';
import { MusicService } from './music.service';
import { JwtAuthGuard } from '../../../infra/jwt/jwt-auth.guard';
import { FilesInterceptor } from '@nestjs/platform-express';
import { FileDTO } from '../file/dto/file.dto';

@Controller('public/musics')
export class MusicController {
  constructor(private readonly musicService: MusicService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(): Promise<IMusic[]> {
    return await this.musicService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  //@GrpcMethod('UserService')
  async findById(@Param('id') id: string): Promise<IMusic> {
    return await this.musicService.findByKey('id', id);
  }

  @Post()
  @UseInterceptors(FilesInterceptor('file'))
  async create(
    @UploadedFiles() file: FileDTO[],
    @Body() createMusicDTO: MusicDTO,
  ): Promise<IMusic> {
    const music: MusicDTO = await new MusicDTO(createMusicDTO);
    return this.musicService.create(music, file);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  @UseInterceptors(FilesInterceptor('file'))
  async update(
    @UploadedFile() file: FileDTO[],
    @Param('id') id: string,
    @Body() music: MusicDTO,
  ): Promise<IMusic> {
    const updateMusic = await new MusicDTO(music, id);
    return await this.musicService.update(id, updateMusic, file);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.musicService.destroy(id);
  }
}
