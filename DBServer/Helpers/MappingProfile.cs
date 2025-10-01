using Models.DTO;
using AutoMapper;

namespace DBServer.Helpers
{
  public class MappingProfile : Profile
  {
    public MappingProfile()
    {
      CreateMap<ToDoItem, Entity.ToDoItem>().ReverseMap();
      CreateMap<Entity.ToDoItem, ToDoItem>().ReverseMap();
    }
  }
}
