import { IsString, IsNotEmpty, Length } from 'class-validator';

class CreateEventDto {
  @IsString()
  @Length(2, 128)
  public firstName: string;

  @IsString()
  @Length(2, 128)
  public lastName: string;

  @IsString()
  @Length(2, 128)
  public email: string;

  @IsNotEmpty()
  public date: Date;
}

export default CreateEventDto;
