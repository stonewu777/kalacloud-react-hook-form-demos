import { useForm } from "react-hook-form";

function BasicForm() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <div className="App">
      <h2>react-hook-form 基本使用方法</h2>
      <h3>「卡拉云 - 极速搭建企业内部工具，十倍提升开发效率」 </h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">姓名</label>
          <input {...register("name")} />
        </div>

        <div>
          <label htmlFor="phone">电话</label>
          <input {...register("phone")} />
        </div>

        <div>
          <label htmlFor="email">邮件</label>
          <input type="email" {...register("email")} />
        </div>
        <input type="submit" value={"提交"} />
      </form>
    </div>
  );
}

export default BasicForm;
