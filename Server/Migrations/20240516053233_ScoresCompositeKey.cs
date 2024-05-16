using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MathStatisticsProject.Migrations
{
    public partial class ScoresCompositeKey : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Scores_Students_StudentId1",
                table: "Scores");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Scores",
                table: "Scores");

            migrationBuilder.DropIndex(
                name: "IX_Scores_StudentId1",
                table: "Scores");

            migrationBuilder.DropColumn(
                name: "StudentId1",
                table: "Scores");

            migrationBuilder.AlterColumn<Guid>(
                name: "LessonId",
                table: "Scores",
                type: "uuid",
                nullable: false,
                oldClrType: typeof(Guid),
                oldType: "uuid")
                .Annotation("Relational:ColumnOrder", 0);

            migrationBuilder.AlterColumn<Guid>(
                name: "StudentId",
                table: "Scores",
                type: "uuid",
                nullable: false,
                oldClrType: typeof(Guid),
                oldType: "uuid")
                .Annotation("Relational:ColumnOrder", 1);

            migrationBuilder.AddPrimaryKey(
                name: "PK_Scores",
                table: "Scores",
                columns: new[] { "LessonId", "StudentId" });

            migrationBuilder.CreateIndex(
                name: "IX_Scores_StudentId",
                table: "Scores",
                column: "StudentId");

            migrationBuilder.AddForeignKey(
                name: "FK_Scores_Students_StudentId",
                table: "Scores",
                column: "StudentId",
                principalTable: "Students",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Scores_Students_StudentId",
                table: "Scores");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Scores",
                table: "Scores");

            migrationBuilder.DropIndex(
                name: "IX_Scores_StudentId",
                table: "Scores");

            migrationBuilder.AlterColumn<Guid>(
                name: "StudentId",
                table: "Scores",
                type: "uuid",
                nullable: false,
                oldClrType: typeof(Guid),
                oldType: "uuid")
                .OldAnnotation("Relational:ColumnOrder", 1);

            migrationBuilder.AlterColumn<Guid>(
                name: "LessonId",
                table: "Scores",
                type: "uuid",
                nullable: false,
                oldClrType: typeof(Guid),
                oldType: "uuid")
                .OldAnnotation("Relational:ColumnOrder", 0);

            migrationBuilder.AddColumn<Guid>(
                name: "StudentId1",
                table: "Scores",
                type: "uuid",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.AddPrimaryKey(
                name: "PK_Scores",
                table: "Scores",
                column: "StudentId");

            migrationBuilder.CreateIndex(
                name: "IX_Scores_StudentId1",
                table: "Scores",
                column: "StudentId1");

            migrationBuilder.AddForeignKey(
                name: "FK_Scores_Students_StudentId1",
                table: "Scores",
                column: "StudentId1",
                principalTable: "Students",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
