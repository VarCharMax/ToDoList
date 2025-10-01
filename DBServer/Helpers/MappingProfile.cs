using AutoMapper;

namespace DBServer.Helpers
{
  public class MappingProfile : Profile
  {
    public MappingProfile()
    {
      CreateMap<DTO.ToDoItem, Entity.ToDoItem>().ReverseMap();
      CreateMap<Entity.ToDoItem, DTO.ToDoItem>().ReverseMap();
    }
  }
}
