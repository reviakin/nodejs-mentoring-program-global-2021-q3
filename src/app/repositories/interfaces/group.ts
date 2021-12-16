import { IPreGroupDto, IGroupDto } from "../../dto";

interface IGroupRepository {
  getOneById: (id: string) => Promise<IGroupDto | undefined>;
  createOne: (Group: IPreGroupDto) => Promise<IGroupDto>;
  deleteOneById: (id: string) => Promise<IGroupDto | undefined>;
  updateOneById: (
    id: string,
    updates: Partial<IPreGroupDto>
  ) => Promise<IGroupDto | undefined>;
  getMany: () => Promise<Array<IGroupDto>>;
}

export { IGroupRepository };
