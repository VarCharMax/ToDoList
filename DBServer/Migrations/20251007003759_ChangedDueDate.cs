using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DBServer.Migrations
{
    /// <inheritdoc />
    public partial class ChangedDueDate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "CompletedDate",
                table: "ToDoItems",
                newName: "DueBy");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "DueBy",
                table: "ToDoItems",
                newName: "CompletedDate");
        }
    }
}
