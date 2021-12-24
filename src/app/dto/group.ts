import { IUserDto } from ".";

enum IPermission {
  "READ",
  "WRITE",
  "DELETE",
  "SHARE",
  "UPLOAD_FILES",
}

interface IGroupDto {
  id: string;
  name: string;
  permissions: Array<IPermission>;
}

type IPreGroupDto = Omit<IGroupDto, "id">;

interface IGroupDtoWithUsers extends IPreGroupDto {
  users: Array<IUserDto>;
}

export { IPreGroupDto, IGroupDto, IPermission, IGroupDtoWithUsers };
