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
import { AlbumDTO } from './dto/album.dto';
import { IAlbum } from '../../../main/interfaces/album.interface';
import { AlbumService } from './album.service';
import { JwtAuthGuard } from '../../../infra/jwt/jwt-auth.guard';
import { FilesInterceptor } from '@nestjs/platform-express';
import { FileDTO } from '../file/dto/file.dto';

@Controller('public/albums')
export class AlbumController {
  constructor(private readonly albumService: AlbumService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(): Promise<IAlbum[]> {
    return await this.albumService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  //@GrpcMethod('UserService')
  async findById(@Param('id') id: string): Promise<IAlbum> {
    return await this.albumService.findByKey('id', id);
  }

  @Post()
  @UseInterceptors(FilesInterceptor('file'))
  async create(
    @UploadedFiles() file: FileDTO[],
    @Body() createAlbumDTO: AlbumDTO,
  ): Promise<IAlbum> {
    const album: AlbumDTO = await new AlbumDTO(createAlbumDTO);
    return this.albumService.create(album, file);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  @UseInterceptors(FilesInterceptor('file'))
  async update(
    @UploadedFile() file: FileDTO[],
    @Param('id') id: string,
    @Body() updateAlbumDTO: AlbumDTO,
  ): Promise<IAlbum> {
    const updatealbum = await new AlbumDTO(updateAlbumDTO, id);
    return await this.albumService.update(id, updatealbum, file);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.albumService.destroy(id);
  }
}
