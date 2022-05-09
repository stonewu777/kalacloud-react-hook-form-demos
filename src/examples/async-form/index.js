import { useForm } from "react-hook-form";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function AsyncForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const onSubmit = async (data) => {
    await sleep(2000);
    if (data.username === "kalacloud") {
      alert(JSON.stringify(data));
    } else {
      alert("用户名必须是 kalacloud");
    }
  };

  return (
    <div>
      <h1>react-hook-form 异步使用方法</h1>
      <h2>卡拉云 - 低代码开发工具，1秒搭建上传后台</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="username">用户名</label>
        <input {...register("username")} />

        <label htmlFor="lastName">密码</label>
        <input type="password" {...register("lastName")} />

        <label htmlFor="email">邮箱</label>
        <input
          placeholder="someone@kalacloud.com"
          type="text"
          {...register("email")}
        />

        <div style={{ color: "red" }}>
          {Object.keys(errors).length > 0 && "发生了一些错误."}
        </div>

        <input type="submit" value={isSubmitting ? "正在提交..." : "提交"} />
      </form>
    </div>
  );
}

export default AsyncForm;
