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

export { IPreGroupDto, IGroupDto, IPermission };
