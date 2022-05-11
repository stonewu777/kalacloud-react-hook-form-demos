import { useForm } from "react-hook-form";
import FormSection1 from "./FormSection1";
import FormSection2 from "./FormSection2";

function NestedForm() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <div className="nested-form">
      <h2>react-hook-form 嵌套表单使用方法</h2>
      <h3>「卡拉云 - 极速搭建企业内部工具，十倍提升开发效率」 </h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormSection1 register={register} />
        <FormSection2 register={register} />
        <input type="submit" value={"提交"} />
      </form>
    </div>
  );
}

export default NestedForm;
