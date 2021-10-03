import { IsString, IsNotEmpty, Length } from 'class-validator';

/**
 * DTO with all necessary fields to create new event.
 * @author Maciej Krawczyk
 * @class CreateEventDto
 */
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
