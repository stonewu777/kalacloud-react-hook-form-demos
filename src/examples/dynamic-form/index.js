import { useForm, useFieldArray } from "react-hook-form";
import "./index.css";

function DynamicForm() {
  const { register, handleSubmit, control, watch } = useForm();
  const { fields, append } = useFieldArray({
    control,
    name: "fieldArray",
  });
  const onSubmit = (data) => alert(JSON.stringify(data));

  const watchFieldArray = watch("fieldArray");
  const controlledFields = fields.map((field, index) => {
    return {
      ...field,
      ...watchFieldArray[index],
    };
  });

  return (
    <div className="dynamic-form">
      <h2>react-hook-form 动态表单使用方法</h2>
      <h3>「卡拉云 - 极速搭建企业内部工具，十倍提升开发效率」 </h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("title")} placeholder="标题" />

        {controlledFields.map((field, index) => {
          return <input {...register(`fieldArray.${index}.name`)} />;
        })}

        <button
          type="button"
          onClick={() =>
            append({
              name: "十倍提升开发效率",
            })
          }
        >
          添加
        </button>

        <input type="submit" value={"提交"} />
      </form>
    </div>
  );
}

export default DynamicForm;
