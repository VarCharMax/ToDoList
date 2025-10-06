using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DBServer.Migrations
{
    /// <inheritdoc />
    public partial class AddCompleteBy : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "CompleteBy",
                table: "ToDoItems",
                type: "TEXT",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CompleteBy",
                table: "ToDoItems");
        }
    }
}
