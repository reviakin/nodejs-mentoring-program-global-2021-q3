import { IGroupDto, IPreGroupDto } from "../../dto";

interface IGroupService {
  getOneById: (id: string) => Promise<IGroupDto | undefined>;
  createOne: (user: IPreGroupDto) => Promise<IGroupDto>;
  deleteOneById: (id: string) => Promise<IGroupDto | undefined>;
  updateOneById: (
    id: string,
    updates: Partial<IPreGroupDto>
  ) => Promise<IGroupDto | undefined>;
  getMany: () => Promise<Array<IGroupDto>>;
}

export { IGroupService };
