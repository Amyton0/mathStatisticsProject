using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using System.ComponentModel.DataAnnotations.Schema;
using System.Runtime.Serialization;
using System.Text.Json.Serialization;

namespace MathStatisticsProject.Models
{
    [Table("Homeworks")]
    public class Homework
    {
        public Guid Id { get; set; }
        public int Number { get; set; }
        public DateTime Send { get; set; }
        public Guid StudentId { get; set; }
        public Student Student { get; set; }
        public string Content { get; set; }
        public string Message { get; set; }
        public Status Status { get; set; }
        public Type Type { get; set; }
        public double Scores { get; set; }
    }

    [System.Text.Json.Serialization.JsonConverter(typeof(CustomStringToEnumConverter<Type>))]
    public enum Type
    {
        [EnumMember(Value = "0")]
        DZ,
        [EnumMember(Value = "1")]
        Grob
    }

    [System.Text.Json.Serialization.JsonConverter(typeof(CustomStringToEnumConverter<Status>))]
    public enum Status
    {
        [EnumMember(Value = "0")]
        Sended,
        [EnumMember(Value = "1")]
        Doreshka,
        [EnumMember(Value = "2")]
        Checked,
    }

    public class CustomStringToEnumConverter<T> : StringEnumConverter
    {
        public object ReadJson(JsonReader reader, Type objectType, object existingValue, JsonSerializer serializer)
        {
            if (string.IsNullOrEmpty(reader.Value?.ToString()))
            {
                return null;
            }
            try
            {
                return EnumExtensions.GetValueFromEnumMember<T>(reader.Value.ToString());
            }
            catch (Exception ex)
            {
                return null;
            }
        }
    }

    public static class EnumExtensions
    {
        public static T GetValueFromEnumMember<T>(string value)
        {
            var type = typeof(T);
            if (!type.IsEnum) throw new InvalidOperationException();
            foreach (var field in type.GetFields())
            {
                var attribute = Attribute.GetCustomAttribute(field,
                    typeof(EnumMemberAttribute)) as EnumMemberAttribute;
                if (attribute != null)
                {
                    if (attribute.Value == value)
                        return (T)field.GetValue(null);
                }
                else
                {
                    if (field.Name == value)
                        return (T)field.GetValue(null);
                }
            }
            throw new ArgumentException($"unknow value: {value}");
        }
    }
}
