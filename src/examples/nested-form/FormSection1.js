export default function Section1({ register }) {
  return (
    <>
      <div>
        <label>姓名</label>
        <input
          type="text"
          {...register("name", { required: true, maxLength: 80 })}
        />
      </div>
      <div>
        <label>年龄</label>
        <input
          type="number"
          {...register("age", { required: true })}
        />
      </div>
    </>
  );
}
