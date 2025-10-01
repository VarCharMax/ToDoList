using AutoMapper;

namespace DBServer.Helpers
{
  public class MappingProfile : Profile
  {
    public MappingProfile()
    {
      // CreateMap<Entity.User, DTO.User>().ReverseMap();
      CreateMap<Entity.ToDoItem, DTO.ToDoItem>().ReverseMap();
    }
  }
}
