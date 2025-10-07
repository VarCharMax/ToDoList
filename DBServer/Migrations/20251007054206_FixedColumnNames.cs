using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DBServer.Migrations
{
    /// <inheritdoc />
    public partial class FixedColumnNames : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "CompleteBy",
                table: "ToDoItems",
                newName: "CompletedDate");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "CompletedDate",
                table: "ToDoItems",
                newName: "CompleteBy");
        }
    }
}
