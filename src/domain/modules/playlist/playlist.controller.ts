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
import { PlaylistDTO } from './dto/playlist.dto';
import { IPlaylist } from '../../../main/interfaces/playlist.interface';
import { PlaylistService } from './playlist.service';
import { JwtAuthGuard } from '../../../infra/jwt/jwt-auth.guard';
import { FilesInterceptor } from '@nestjs/platform-express';
import { FileDTO } from '../file/dto/file.dto';

@Controller('public/playlists')
export class PlaylistController {
  constructor(private readonly playlistService: PlaylistService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(): Promise<IPlaylist[]> {
    return await this.playlistService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  //@GrpcMethod('UserService')
  async findById(@Param('id') id: string): Promise<IPlaylist> {
    return await this.playlistService.findByKey('id', id);
  }

  @Post()
  @UseInterceptors(FilesInterceptor('file'))
  async create(
    @UploadedFiles() file: FileDTO[],
    @Body() createPlaylistDTO: PlaylistDTO,
  ): Promise<IPlaylist> {
    const playlist: PlaylistDTO = await new PlaylistDTO(createPlaylistDTO);
    return this.playlistService.create(playlist, file);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  @UseInterceptors(FilesInterceptor('file'))
  async update(
    @UploadedFile() file: FileDTO[],
    @Param('id') id: string,
    @Body() playlist: PlaylistDTO,
  ): Promise<IPlaylist> {
    const updatePlaylist = await new PlaylistDTO(playlist, id);
    return await this.playlistService.update(id, updatePlaylist, file);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.playlistService.destroy(id);
  }
}
