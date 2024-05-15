using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MathStatisticsProject.Migrations
{
    public partial class RenameHomeworkTypeToComplexity : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Type",
                table: "Homeworks",
                newName: "Complexity");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Complexity",
                table: "Homeworks",
                newName: "Type");
        }
    }
}
