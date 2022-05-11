import { useForm } from "react-hook-form";

function CustomValidationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };
  const intialValues = {
    firstName: "test",
    email: "admin@kalacloud.com",
    age: -1,
  };

  return (
    <div>
      <h1>react-hook-form 异步使用方法</h1>
      <h2>「卡拉云 - 极速搭建企业内部工具，十倍提升开发效率」 </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="firstName">姓名</label>
        <input
          defaultValue={intialValues.firstName}
          {...register("firstName", {
            validate: (value) => value === "kalacloud",
          })}
        />
        {errors.firstName && <p>你的名字不是kalacloud</p>}

        <label htmlFor="email">Email</label>
        <input
          defaultValue={intialValues.email}
          placeholder="someone@kalacloud.com"
          type="email"
          {...register("email")}
        />
        <label htmlFor="age">Age</label>
        <input
          defaultValue={intialValues.age}
          placeholder="0"
          type="text"
          {...register("age", {
            validate: {
              positiveNumber: (value) => parseFloat(value) > 0,
              lessThanHundred: (value) => parseFloat(value) < 20,
            },
          })}
        />
        {errors.age && errors.age.type === "positiveNumber" && (
          <p>你的年龄是非法的</p>
        )}
        {errors.age && errors.age.type === "lessThanHundred" && (
          <p>你的年龄应该小于20</p>
        )}

        <input type="submit" value="提交" />
      </form>
    </div>
  );
}

export default CustomValidationForm;
