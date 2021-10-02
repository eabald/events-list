import { IsString, Length, IsNotEmpty, IsNumber } from 'class-validator';

class UpdateEventDto {
  @IsNumber()
  @IsNotEmpty()
  public id: number;

  @IsString()
  @Length(2, 128)
  public firstName: string;

  @IsString()
  @Length(2, 128)
  public lastName: string;

  @IsString()
  @Length(3, 128)
  public email: string;

  @IsNotEmpty()
  public date: Date;
}

export default UpdateEventDto;
