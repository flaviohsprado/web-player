import { User } from '../../data/entities/user.entity';
import { Repository } from 'typeorm';

export class EmailUtils {
  constructor(private userRepository: Repository<User>) {}

  public async checkEmailAlreadyExists(
    userId: string,
    email: string,
  ): Promise<boolean> {
    const user = await this.userRepository.findOne({
      where: { email },
    });

    if (user && user.id !== userId) return false;

    return true;
  }
}
