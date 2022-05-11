import { useForm, Controller } from "react-hook-form";
import { DatePicker, Button, Select } from "antd";

const { Option } = Select;

function WithAntdForm() {
  const { control, handleSubmit } = useForm();
  const onSubmit = (data) => alert(JSON.stringify(data));

  return (
    <div className="antd-form">
      <h1>react-hook-form 异步使用方法</h1>
      <h2>「卡拉云 - 极速搭建企业内部工具，十倍提升开发效率」 </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Controller
            control={control}
            name="antdDatepicker"
            render={({ field }) => (
              <DatePicker
                {...field}
                style={{ width: "400px" }}
                onChange={(e) => {
                  field.onChange(e);
                  console.log(e["_d"]);
                }}
              />
            )}
            rules={{ required: true }}
          />
        </div>

        <div style={{ margin: "20px 0" }}>
          <Controller
            control={control}
            name="antdSelect"
            render={({ field }) => (
              <>
                <Select
                  defaultValue="卡拉云"
                  style={{ width: "400px" }}
                  {...field}
                >
                  <Option value="极速搭建业务系统">极速搭建业务系统</Option>
                  <Option value="数十倍提升开发效率">数十倍提升开发效率</Option>
                  <Option value="拖拽构建，所见即所得">
                    拖拽构建，所见即所得
                  </Option>
                  <Option value="连接所有内部、外部数据">
                    连接所有内部、外部数据
                  </Option>
                </Select>
              </>
            )}
          />
        </div>
        <Button type="primary" htmlType="submit" style={{ width: "400px" }}>
          Submit
        </Button>
      </form>
    </div>
  );
}

export default WithAntdForm;
