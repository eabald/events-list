// External
import { IsString, Length, IsNotEmpty, IsNumber } from 'class-validator';

/**
 * DTO with all necessary fields to update event.
 * @author Maciej Krawczyk
 * @class UpdateEventDto
 */
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
