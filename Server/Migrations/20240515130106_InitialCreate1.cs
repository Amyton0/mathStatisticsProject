using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MathStatisticsProject.Migrations
{
    public partial class InitialCreate1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Attendances_students_StudentId",
                table: "Attendances");

            migrationBuilder.DropForeignKey(
                name: "FK_Homeworks_students_StudentId",
                table: "Homeworks");

            migrationBuilder.DropPrimaryKey(
                name: "PK_students",
                table: "students");

            migrationBuilder.RenameTable(
                name: "students",
                newName: "Students");

            migrationBuilder.RenameColumn(
                name: "Scores",
                table: "Homeworks",
                newName: "Points");

            migrationBuilder.AddColumn<Guid>(
                name: "LessonId",
                table: "Homeworks",
                type: "uuid",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.AddPrimaryKey(
                name: "PK_Students",
                table: "Students",
                column: "Id");

            migrationBuilder.CreateTable(
                name: "Teachers",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    FirstName = table.Column<string>(type: "text", nullable: false),
                    SecondName = table.Column<string>(type: "text", nullable: false),
                    ThirdName = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Teachers", x => x.Id);
                });

            migrationBuilder.AddForeignKey(
                name: "FK_Attendances_Students_StudentId",
                table: "Attendances",
                column: "StudentId",
                principalTable: "Students",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Homeworks_Students_StudentId",
                table: "Homeworks",
                column: "StudentId",
                principalTable: "Students",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Attendances_Students_StudentId",
                table: "Attendances");

            migrationBuilder.DropForeignKey(
                name: "FK_Homeworks_Students_StudentId",
                table: "Homeworks");

            migrationBuilder.DropTable(
                name: "Teachers");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Students",
                table: "Students");

            migrationBuilder.DropColumn(
                name: "LessonId",
                table: "Homeworks");

            migrationBuilder.RenameTable(
                name: "Students",
                newName: "students");

            migrationBuilder.RenameColumn(
                name: "Points",
                table: "Homeworks",
                newName: "Scores");

            migrationBuilder.AddPrimaryKey(
                name: "PK_students",
                table: "students",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Attendances_students_StudentId",
                table: "Attendances",
                column: "StudentId",
                principalTable: "students",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Homeworks_students_StudentId",
                table: "Homeworks",
                column: "StudentId",
                principalTable: "students",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
